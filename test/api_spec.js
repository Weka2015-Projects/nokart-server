'use strict'

require('co-mocha')
const app = require('../app.js')
const request = require('co-supertest').agent(app.listen())
const expect = require('chai').expect

describe('API end points', () => {
  describe('get PRODUCTS', () => {
    it('returns 200 when found', function *() {
      yield request.get('/products').expect(200).end()
    })
    it('return a list of all 3 products', function *() {
      let res = yield request.get('/products')
      expect(res.body.length).to.equal(3)
    })
  })
})
