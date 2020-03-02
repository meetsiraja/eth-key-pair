const secp256k1 = require('secp256k1')
const { toBuffer, addPrefix0x } = require('./utils');

/**
 * Generate publicKey from the privateKey.
 * This creates the uncompressed publicKey,
 * where 04 has stripped from left
 * @returns {string}
 */
function publicKeyByPrivateKey(p){
    const privateKey = addPrefix0x(p);
    const privateKeyBuffer = toBuffer(privateKey);
    const publicKeyUINT8Array = secp256k1.publicKeyCreate(privateKeyBuffer, false).slice(1);
    const publicKey = Buffer(publicKeyUINT8Array)
    return publicKey.toString('hex');
}

module.exports = {
    publicKeyByPrivateKey
};