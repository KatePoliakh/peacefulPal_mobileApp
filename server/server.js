const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'PeacefulPalDataBase',
    password: 'postgres',
    port: 5432,
});

const app = express();
app.use(bodyParser.json());

// Endpoint for user registration
app.post('/api/register', async (req, res) => {
    const { fullName, email, password } = req.body;
    const userId = uuidv4();
    // Perform database query to insert new user
    try {
        // Check if the email already exists in the database
       const emailExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (emailExists.rows.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        // If email is not registered, proceed with user registration
        await pool.query('INSERT INTO users (id, full_name, email, password) VALUES ($1, $2, $3, $4)', [userId, fullName, email, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for user authentication
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    // Perform database query to check user credentials
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});