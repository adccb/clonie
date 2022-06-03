import { Dict } from '../util'

export type RangeTracker = {
  id: 'range'
  type: 'number'
  min: number
  max: number
}

export const rangeTracker = ({ min, max }: Dict<unknown>): RangeTracker => ({
  id: 'range',
  type: 'number',
  min: typeof min === 'number' ? min : 0,
  max: typeof max === 'number' ? max : 10,
})

export const editRangeTracker = (
  tracker: RangeTracker,
  edits: Partial<RangeTracker>,
): RangeTracker => ({ ...tracker, ...edits })

export const isRangeTracker = (t: Dict<unknown>): t is RangeTracker =>
  Object.keys(t).every(key => ['id', 'type', 'min', 'max'].includes(key)) &&
  t.id === 'range' &&
  t.type === 'number' &&
  typeof t.min === 'number' &&
  typeof t.max === 'number'
