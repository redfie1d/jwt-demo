const express = require('express');
const router = express.Router();

// Require middleware
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, (req, res) => {
  if (!req.user) return res.status(403).send('You are not logged in.'); // Redirect to Login Page

  const posts = [
    {
      owner: 'user1',
      title: 'Post 1',
    },
    {
      owner: 'user2',
      title: 'Post 2',
    },
  ];

  res.json(posts);
});

module.exports = router;
