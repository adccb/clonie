import { entry, isEntry } from '../entry'

import { createTracker } from '../trackers'

describe('entry', () => {
  it('should correctly determine whether something is or is not an entry', async () => {
    const valid = entry({
      value: 2,
      tracker: await createTracker({ name: 'hi', type: 'range' }),
    })
    const invalid = [{}, []]

    expect(isEntry(valid)).toBe(true)
    invalid.forEach(i => expect(isEntry(i)).toBe(false))
  })
})
