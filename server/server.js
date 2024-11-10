// server.js
const express = require('express');
const cors = require('cors'); // Import CORS
const Decryptor = require('./decryptor.js');
const CryptoJS = require('crypto-js');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for localhost:3000
app.use(express.json());

// Secure shared secret key
const secretKey = 'YOUR_SECRET_KEY_1234567890123456';

// Initialize Decryptor
const decryptor = new Decryptor(secretKey);

// Endpoint to handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    try {
        // Decrypt the email and password
        const decryptedEmail = decryptor.decryptText(email);
        const decryptedPassword = decryptor.decryptText(password);

        // Simple authentication check (replace with actual logic)
        if (decryptedEmail === 'arun@gmail.com' && decryptedPassword === 'password123') {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Decryption failed' });
    }
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
