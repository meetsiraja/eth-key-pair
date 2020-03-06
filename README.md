# eth-key-pair
![npm](https://img.shields.io/npm/v/eth-key-pair) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 


Convert Ethereum private key, public key and address with each other.

Feature:
- Convert `Ethereum` private key to public key
- More functions coming soon...

## Installation

```bash
npm install eth-key-pair
```

### Initialization

```js
const EthKey = require('eth-key-pair');
```

### Generate PublicKey from PrivateKey:
This creates the uncompressed publicKey from privateKey, where 04 has stripped from left.
```js
let publicKey = EthKey.publicKeyByPrivateKey("72fdf5bfe391b520129ce1b4e256c79af1ddf4e95e5124803c58f7da28e64727")

console.log(publicKey)
```
#### Output:
```bash
 e06740583be9fbdabaa26fc1795e2bbaacb95fabbd47f7ed5454d4c3033906fb8d6080f1b601da0a746ab39d5bde4c26c118638cbc77367b49dd65d086897ba3
```

## Contributing

- Issues & Pull requests are welcome! Fork, branch, and submit PR.

## Changelog

- [Changelog](https://github.com/meetsiraja/eth-key-pair/blob/master/CHANGELOG.md)

## Licence

[MIT](https://github.com/meetsiraja/eth-key-pair/blob/master/LICENCE.md)