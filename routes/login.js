const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  const { username, password } = req.body;

  // -----------------------------------------------------------
  // Go through validation checks for username, password
  // Return appropriate error response if validations fail
  // -----------------------------------------------------------

  // IF VALIDATION CHECKS PASSES
  const payload = { username }; // payload
  const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);
  res.json({ jwtToken });
});

module.exports = router;
