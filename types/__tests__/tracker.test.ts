import { createTracker, isTracker } from '../trackers'

describe('isTracker', () => {
  it('should correctly determine whether something is or is not a range tracker', async () => {
    const valid = await createTracker({ name: 'hi', type: 'range' })
    const invalid = [{}, []]

    expect(isTracker(valid)).toBe(true)
    invalid.forEach(i => expect(isTracker(i)).toBe(false))
  })
})
