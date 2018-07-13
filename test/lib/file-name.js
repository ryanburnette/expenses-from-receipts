const mocha = require('mocha')
const describe = mocha.describe
const chai = require('chai')
const expect = chai.expect
const fileName = require('../../lib/file-name')

describe('#fileName()',function () {
  it('works',function () {
    expect(fileName('./foo/bar/foo.pdf')).to.eq('foo')
  })
})
