const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/v1/health', (req, res) => res.json({ message: 'API is healthy.' }));
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/posts', postRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
