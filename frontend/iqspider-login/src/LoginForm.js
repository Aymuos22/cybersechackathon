// src/LoginForm.js
import React, { useState } from 'react';
import Encryptor from './Encryptor';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const secretKey = 'YOUR_SECRET_KEY_1234567890123456';  // Replace with the actual key
    const encryptor = new Encryptor(secretKey);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Encrypt the email and password
        const encryptedEmail = encryptor.encryptText(email);
        const encryptedPassword = encryptor.encryptText(password);

        // Send encrypted data to the server
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: encryptedEmail,
                password: encryptedPassword
            })
        });

        const result = await response.json();
        if (result.success) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="container">
            <div className="left">
                <h2>iQSpider</h2>
                <p>Come, Experience Peaceful Business</p>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="arun@gmail.com" 
                            required 
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
            <div className="right">
                <h3>Inventory Management, Asset Management, and Visitor Management</h3>
            </div>
        </div>
    );
}

export default LoginForm;
