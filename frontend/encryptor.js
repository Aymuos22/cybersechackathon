// encryptor.js (Client-Side)

// Import crypto-js for AES encryption
import CryptoJS from 'crypto-js';

class Encryptor {
    constructor(secretKey) {
        this.secretKey = secretKey;  // Secret key received securely from server
    }

    // Check if the connection is secure (HTTPS)
    isConnectionSecure() {
        if (window.location.protocol !== 'https:') {
            console.warn("Warning: Connection is not secure. Use HTTPS for a secure connection.");
            return false;
        }
        return true;
    }

    // Encrypt input text using AES with the secret key
    encryptText(...args) {
        if (!this.isConnectionSecure()) {
            return {
                error: "Insecure connection detected. Encryption aborted.",
                encryptedText: null
            };
        }

        // Concatenate input fields
        const plainText = args.join(' ');

        // Encrypt using AES
        const encryptedText = CryptoJS.AES.encrypt(plainText, this.secretKey).toString();

        // Return encrypted text
        return encryptedText;
    }
}

// Export the Encryptor class as a module
export default Encryptor;
