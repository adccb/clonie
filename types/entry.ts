import { Dict } from './util'
import { Tracker } from './trackers'

export type Value = number

export type Entry = { value: Value; trackerName: string }

export const entry = ({
  tracker,
  value,
}: {
  tracker: Tracker
  value: Value
}): Entry => ({
  value,
  trackerName: tracker.name,
})

export const isEntry = (e: Dict<unknown>): e is Entry =>
  Object.keys(e).every(key => ['trackerName', 'value'].includes(key)) &&
  typeof e.trackerName === 'string' &&
  typeof e.value === 'number'
