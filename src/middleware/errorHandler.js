function notFound(req, res) {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
}

function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  console.error(error);
  if (error.name === 'ValidationError') return res.status(400).json({ message: error.message });
  if (error.code === 11000) return res.status(409).json({ message: 'A record with that value already exists.' });
  if (error.name === 'CastError') return res.status(400).json({ message: 'Invalid resource id.' });
  res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error.' });
}

module.exports = { notFound, errorHandler };
