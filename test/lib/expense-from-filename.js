const mocha = require('mocha')
const describe = mocha.describe
const chai = require('chai')
const expect = chai.expect
const expenseFromFilename = require('../../lib/expense-from-filename')
const parse = require('date-fns/parse')
const currency = require('currency.js')

describe('#expenseFromFilename()',function () {
  let filename = '20170101 Some Vendor 100'
  let obj = expenseFromFilename(filename)

  it('gets the date object',function () {
    expect(obj.dateObj).to.eql(parse('20170101'))
  })

  it('gets the vendor',function () {
    expect(obj.vendor).to.eql('Some Vendor')
  })

  it('gets the amount',function () {
    expect(obj.amount).to.eql(currency('100'*0.01))
  })
})
