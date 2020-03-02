function isHexString(value, length) {
    if (typeof(value) !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
      return false;
    }
  
    if (length && value.length !== 2 + 2 * length) { return false; }
  
    return true;
}

function padToEven(value) {
    var a = value; 
    
    if (typeof a !== 'string') {
      throw new Error(`While padding to even, value must be string, is currently ${typeof a}, while padToEven.`);
    }
  
    if (a.length % 2) {
      a = `0${a}`;
    }
  
    return a;
}

function stripHexPrefix(str) {
    if (typeof str !== 'string') {
      return str;
    }
  
    return isHexPrefixed(str) ? str.slice(2) : str;
}
  
function isHexPrefixed(str) {
    if (typeof str !== 'string') {
      throw new Error("Value must be type 'string', is currently type " + (typeof str) + ", while checking isHexPrefixed.");
    }
  
    return str.slice(0, 2) === '0x';
}
  
function intToBuffer(i) {
    const hex = intToHex(i);
  
    return new Buffer(padToEven(hex.slice(2)), 'hex');
}
  
function intToHex(i) {
    var hex = i.toString(16);
  
    return `0x${hex}`;
}

function addPrefix0x(hexString){
    return hexString.startsWith('0x') ? hexString : `0x${hexString}`
}

function toBuffer(v){
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v)
    } else if (typeof v === 'string') {
      if (isHexString(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        throw new Error(
          `Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${v}`,
        )
      }
    } else if (typeof v === 'number') {
      v = intToBuffer(v)
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0)
    } else if (BN.isBN(v)) {
      v = v.toArrayLike(Buffer)
    } else if (v.toArray) {
      v = Buffer.from(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}

module.exports = {
    toBuffer,
    isHexString,
    padToEven,
    stripHexPrefix,
    isHexPrefixed,
    intToBuffer,
    intToHex,
    addPrefix0x
}