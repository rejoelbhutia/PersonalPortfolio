const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin : 'http://myportfoliobucket69.s3-website.eu-north-1.amazonaws.com'
}));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
