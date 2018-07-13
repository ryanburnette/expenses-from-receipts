const parse = require('date-fns/parse')
const currency = require('currency.js')
const dateToString = require('./date-to-string')

function expenseFromFilename(filename) {
  let parts = filename.split(' ')

  let dateObj = parse(parts.shift())
  let date = dateToString(dateObj)
  let amount = currency(parseInt(parts.splice(-1,1))*0.01)
  let vendor = parts.join(' ')

  return {
    date,
    dateObj,
    vendor,
    amount
  }
}

module.exports = expenseFromFilename
