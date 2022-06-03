import {
  RangeTracker,
  rangeTracker,
  editRangeTracker,
  isRangeTracker,
} from '../trackers'

describe('rangeTracker', () => {
  it('should create range trackers correctly', () => {
    const tracker = rangeTracker({ min: 3, max: 15 })
    expect(tracker).toEqual({ id: 'range', type: 'number', min: 3, max: 15 })
  })

  it('should edit range trackers correctly', () => {
    const tracker = rangeTracker({ min: 3, max: 15 })
    expect(editRangeTracker(tracker, { min: 0 })).toEqual({
      id: 'range',
      type: 'number',
      min: 0,
      max: 15,
    })
  })

  it('should correctly determine whether something is or is not a range tracker', () => {
    const valid = rangeTracker({})
    const invalid = [{}, []]

    expect(isRangeTracker(valid)).toBe(true)
    invalid.forEach(i => expect(isRangeTracker(i)).toBe(false))
  })
})
