const CryptoJS = require('crypto-js')
module.exports = function (value, secret) {
  return CryptoJS.AES.decrypt(value, secret).toString(CryptoJS.enc.Utf8)
}
