const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();

app.use(cors({
  origin : 'http://myportfoliobucket69.s3-website.eu-north-1.amazonaws.com'
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

module.exports.handler = serverless(app)
