encrypt-value
===

Encrypt a property value(e.g. password).

### Installation
```sh
$ npm i encrypt-value -S
```

### Usage

1. Add `export <PROJECT>_AES="<secret>"` in `./bashrc`, and __source__ it.

2. Run `$ ./node_modules/.bin/encrypt-value` in terminal to encrypt your value, and get a ciphertext.

3. Copy the ciphertext to your project config file(e.g. `{"password": "<ciphertext>"}`).

4. Get the value by `getDecryptedValue(config.password [, <env_name>])` in your project.

### Node.js
```js
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
```

### CLI
```sh
$ encrypt-value -h
```

### License

MIT
