import { createTracker, dataPointTracker } from '../trackers'
import { registerLog } from '../log'

describe('createTracker', () => {
  it('should generate datapoint trackers correctly', async () => {
    const { name, tracker } = await createTracker({
      name: 'points',
      type: 'dataPoint',
    })

    if (tracker.id !== 'dataPoint') throw new Error()
    expect(name).toBe('points')
  })

  it('should generate default range trackers correctly', async () => {
    const { name, tracker } = await createTracker({
      name: 'range',
      type: 'range',
    })

    if (tracker.id !== 'range') throw new Error()
    expect(name).toBe('range')
    expect(tracker.min).toBe(0)
    expect(tracker.max).toBe(10)
  })

  it('should generate configured range trackers correctly', async () => {
    const { name, tracker } = await createTracker({
      name: 'range',
      type: 'range',
      min: 20,
      max: 24,
    })

    if (tracker.id !== 'range') throw new Error()
    expect(name).toBe('range')
    expect(tracker.min).toBe(20)
    expect(tracker.max).toBe(24)
  })
})

describe('registerLog', () => {
  const defaultEntry = { value: 1234, trackerName: 'tracker-id' }

  it('should give a default log if none is provided', () =>
    expect(registerLog().log).toEqual({}))

  it('should give an existing log if one is provided', () => {
    const { log } = registerLog({ test: defaultEntry })
    expect(Object.keys(log).length).toBe(1)
    expect(Object.values(log)[0]).toEqual(defaultEntry)
  })

  it('should allow adding a new log entry', () => {
    const log = registerLog().addEntry(defaultEntry)
    expect(Object.values(log)[0]).toEqual(defaultEntry)
  })
})
