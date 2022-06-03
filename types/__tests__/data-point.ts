import { dataPointTracker, isDataPointTracker } from '../trackers'

describe('dataPointTracker', () => {
  it('should correctly determine whether something is or is not a data point tracker', () => {
    const valid = dataPointTracker()
    const invalid = [{}, []]

    expect(isDataPointTracker(valid)).toBe(true)
    invalid.forEach(i => expect(isDataPointTracker(i)).toBe(false))
  })
})
