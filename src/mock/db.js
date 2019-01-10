var Mock = require('mockjs')
module.exports = function () {
  return {
    user: Mock.mock({
      'name': '@cname',
      'email': '@email',
      'age|18-25': 22,
      'sex': 'girl'
    })
  }
}
