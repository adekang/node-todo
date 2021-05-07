const db = require('../db.js')
describe('db', () => {
  it('can read', function () {
    expect(db.read instanceof Function).toBe(true)
  })
  it('can write', function () {
    expect(db.write instanceof Function).toBe(true)
  })
})