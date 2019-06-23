function UpperCase(str) {
    return str.toUpperCase();
  }

function Encrypt(str) {
  var jwt = require('jsonwebtoken');
  var result = jwt.sign(str, 'shhhhh');
  return result;
}

module.exports = { UpperCase, Encrypt };