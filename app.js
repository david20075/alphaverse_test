const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Public greeting endpoint
app.get('/greetings', (req, res) => {
  res.json({ message: 'greetings' });
});

// Login endpoint
app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '60s' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get user data (protected)
app.get('/users/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const users = {
    25: { id: 25, name: 'camilo', edad: 28 },
    26: { id: 26, name: 'juan', edad: 32 },
  };
  res.json(users[id]);
});

// Get all users (protected)
app.get('/users', authenticateToken, (req, res) => {
  const users = [
    { id: 25, name: 'camilo', edad: 28 },
    { id: 26, name: 'juan', edad: 32 },
  ];
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
