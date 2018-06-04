function require(path) {
  path = path.replace('encrypt-value', '.')
  return process.mainModule.require(path)
}

const encrypt = require('encrypt-value/encrypt')
const getEnvName = require('encrypt-value/getEnvName')
const secret = process.env[getEnvName()] = 'abc123'
const password = 'admin'
const encryptedPassword = encrypt(password, secret)
// -- The above code is tested only, using the CLI to encrypt.

const getDecryptedValue = require('encrypt-value/getDecryptedValue')
const config = {
  password: encryptedPassword
}
console.log(password === getDecryptedValue(config.password)) // true
