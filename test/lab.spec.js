var expect = require('chai').expect
var Alchemist = require('alchemist-js')
var lab = require('../')

describe('lab', function () {
  var alchemist

  before(function () {
    alchemist = Alchemist.create({ precision: 2 })
    alchemist.use(lab())
    alchemist.use({ name: 'xyz', to: {} })
  })

  it('to xyz', function () {
    expect(alchemist.lab([80, 10, -10]).xyz()).to.deep.eq([.58, .57, .74])
  })

  it('from xyz', function () {
    expect(alchemist.xyz([.50, .50, .50]).lab()).to.deep.eq([76.07, 6.78, 4.44])
  })
})
