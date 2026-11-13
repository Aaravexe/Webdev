require('dotenv').config();
const app = require('./app');
const connectDatabase = require('./config/db');

const port = process.env.PORT || 5000;

if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) {
  console.error('Missing MONGODB_URI or JWT_SECRET. Copy .env.example to .env and fill in its values.');
  process.exit(1);
}

connectDatabase(process.env.MONGODB_URI)
  .then(() => app.listen(port, () => console.log(`Server running at http://localhost:${port}`)))
  .catch((error) => { console.error('Database connection failed:', error.message); process.exit(1); });
