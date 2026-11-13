const jwt = require('jsonwebtoken');
const User = require('../models/User');

function createToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
}

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered.', token: createToken(user.id), user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) { next(error); }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email?.toLowerCase() }).select('+password');
    if (!user || !(await user.comparePassword(password || ''))) return res.status(401).json({ message: 'Invalid email or password.' });
    res.json({ message: 'Login successful.', token: createToken(user.id), user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) { next(error); }
}

async function getMe(req, res) {
  res.json({ user: { id: req.user.id, name: req.user.name, email: req.user.email } });
}

module.exports = { register, login, getMe };
