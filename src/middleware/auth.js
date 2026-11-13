const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function protect(req, res, next) {
  const authorization = req.headers.authorization || '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : null;

  if (!token) return res.status(401).json({ message: 'Authentication required. Send a Bearer token.' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.userId);
    if (!req.user) return res.status(401).json({ message: 'User no longer exists.' });
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}

module.exports = { protect };
