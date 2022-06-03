import { or } from '../util'

describe('or', () => {
  const returnsTrue = () => true
  const returnsFalse = () => false

  it('should correctly do an or operation', () => {
    expect(or({}, returnsFalse, returnsFalse, returnsFalse)).toBe(false)
    expect(or({}, returnsTrue, returnsFalse, returnsFalse)).toBe(true)
  })
})
