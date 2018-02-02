const {encrypt, decrypt, getEnvName} = require('./index')
// const encrypt = require('encrypt-value/encrypt')
// const decrypt = require('encrypt-value/decrypt')
// const getEnvName = require('encrypt-value/getEnvName')

const secret = ''+Math.random()
const text = 'abc'

const code = encrypt(text, secret)
console.log(text === decrypt(code, secret)) // true
console.log(getEnvName()) // ENCRYPT_VALUE_AES
