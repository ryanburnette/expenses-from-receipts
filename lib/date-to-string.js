const format = require('date-fns/format')

function dateToString(date) {
  return format(date,'MM/DD/YYYY')
}

module.exports = dateToString
