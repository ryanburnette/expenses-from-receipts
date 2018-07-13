const path = require('path')

function fileName(fullPath) {
  return path.parse(fullPath.replace(/^.*[\\\/]/, '')).name
}

module.exports = fileName
