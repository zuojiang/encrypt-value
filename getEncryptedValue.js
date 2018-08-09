var getEnvName = require('./getEnvName')
var encrypt = require('./encrypt')

module.exports = function(code, envName) {
  return encrypt(code, process.env[envName || getEnvName()])
}
