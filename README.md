encrypt-value
===

Encrypt a property value(e.g. password).

### Installation
```sh
$ npm i encrypt-value -g
```

### Usage

1. Add `export <PROJECT>_AES="<secret>"` in `./bashrc`, and __source__ it.

2. Run `$ ./node_modules/.bin/encrypt-value` in terminal to encrypt your value, and get a ciphertext.

3. Copy the ciphertext to your project config file(e.g. `{"password": "<ciphertext>"}`).

4. Get the value by `getDecryptedValue(config.password [, <env_name>])` in your project.

### Node.js
```js
const assert = require('assert')
const encrypt = require('encrypt-value/encrypt')
const getEnvName = require('encrypt-value/getEnvName')
const secret = process.env[getEnvName()] = 'abc123'
const password = 'admin'
const encryptedPassword = encrypt(password, secret)
// -- The above code is tested only, using the CLI to encrypt.

const decrypt = require('encrypt-value/decrypt')
const getDecryptedValue = require('encrypt-value/getDecryptedValue')
const getEncryptedValue = require('encrypt-value/getEncryptedValue')
const config = {
  password: encryptedPassword
}
assert.ok(password === decrypt(config.password, secret))
assert.ok(password === getDecryptedValue(config.password))
assert.ok(password === getDecryptedValue(getEncryptedValue(password)))
assert.ok(config.password !== getEncryptedValue(password))
```

### CLI
```sh
$ env|grep _AES
$ encrypt-value ./my_project
$ encrypt-value -S ./my_project
$ encrypt-value -N MY_PROJECT_AES
$ encrypt-value -h
```

### License

MIT
