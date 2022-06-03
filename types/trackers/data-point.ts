import { Dict } from '../util'

export type DataPointTracker = {
  id: 'dataPoint'
  type: 'number'
}

export const dataPointTracker = (): DataPointTracker => ({
  id: 'dataPoint',
  type: 'number',
})

export const isDataPointTracker = (t: Dict<unknown>): t is DataPointTracker =>
  Object.keys(t).every(key => ['id', 'type'].includes(key)) &&
  t.id === 'dataPoint' &&
  t.type === 'number'
