// src/Encryptor.js

import CryptoJS from 'crypto-js';

class Encryptor {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    // Encrypt input text using AES with the secret key
    encryptText(text) {
        return CryptoJS.AES.encrypt(text, this.secretKey).toString();
    }
}

export default Encryptor;
