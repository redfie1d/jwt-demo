const jwt = require('jsonwebtoken');

// Middleware to check if the user has valid jwtToken
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  console.log(authHeader);

  if (!authHeader) return res.status(401).send('No token.');

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    // console.log(payload);
    if (err) return res.status(403).send('Invalid token. Access Denied!');
    req.user = payload;
    next();
  });
};
