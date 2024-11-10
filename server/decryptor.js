// decryptor.js

const CryptoJS = require('crypto-js');

class Decryptor {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    decryptText(encryptedText) {
        const bytes = CryptoJS.AES.decrypt(encryptedText, this.secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

module.exports = Decryptor;
