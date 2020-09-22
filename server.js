const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 3001;
require('dotenv').config();

// Use middleware functions
app.use(express.json());

// Require routes
const login = require('./routes/login');
const posts = require('./routes/posts');

// Use routes
app.use('/api/login', login);
app.use('/api/posts', posts);

// Listen port
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
