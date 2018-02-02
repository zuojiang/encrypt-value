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

4. Get the value by `decrypt(config.password, process.env["<PROJECT>_AES" || getEnvName()])` in your project.

### Node.js
```js
const encrypt = require('encrypt-value/encrypt')
const decrypt = require('encrypt-value/decrypt')
const getEnvName = require('encrypt-value/getEnvName')

const secret = ''+Math.random()
const text = 'abc'

const code = encrypt(text, secret)
console.log(text === decrypt(code, secret)) // true
console.log(getEnvName()) // ENCRYPT_VALUE_AES
```

### CLI
```sh
$ encrypt-value -h
```

### License

MIT
