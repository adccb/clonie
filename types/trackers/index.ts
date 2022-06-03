import { v4 as uuid } from 'uuid'

import { Dict, StringDict, NumberDict, or } from '../util'

import {
  DataPointTracker,
  dataPointTracker,
  isDataPointTracker,
} from './data-point'
import { RangeTracker, rangeTracker, isRangeTracker } from './range'

export type Tracker = {
  id: string
  name: string
  tracker: RangeTracker | DataPointTracker
}

export const createTracker = ({
  name,
  type,
  ...rest
}: Dict<unknown>): Promise<Tracker> =>
  new Promise((res, rej) => {
    const id = uuid()

    if (typeof name !== 'string') {
      rej(TypeError('Name is required'))
    } else if (type === 'dataPoint') {
      res({ name, id, tracker: dataPointTracker() })
    } else if (type === 'range') {
      res({ name, id, tracker: rangeTracker({ ...rest }) })
    }
  })

export const isTracker = (t: Dict<unknown>): t is Tracker =>
  Object.keys(t).every(key => ['id', 'name', 'tracker'].includes(key)) &&
  typeof t.id === 'string' &&
  typeof t.name === 'string' &&
  Boolean(t.tracker) &&
  or(t.tracker as Dict<unknown>, isDataPointTracker, isRangeTracker)

export * from './data-point'
export * from './range'
