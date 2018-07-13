const mocha = require('mocha')
const describe = mocha.describe
const chai = require('chai')
const expect = chai.expect
const parse = require('date-fns/parse')
const dateToString = require('../../lib/date-to-string')

describe('#dateToString()',function () {
  it('works',function () {
    let date = parse('20180101')
    expect(dateToString(date)).to.eq('01/01/2018')
  })
})
