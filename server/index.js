const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const contactRoutes = require('./routes/contact');
const quoteRoutes = require('./routes/quotes');

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://myportfoliobucket69.s3-website.eu-north-1.amazonaws.com', 'http://localhost:5173']
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/quotes', quoteRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports.handler = serverless(app);