import express from 'express'; 
import type {Request, Response} from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';
import contactRoutes  from './src/routes/contact.js';
import quoteRoutes from './src/routes/quotes';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://myportfoliobucket69.s3-website.eu-north-1.amazonaws.com',
    'http://localhost:5173'
  ]
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/quotes', quoteRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Portfolio API is running');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}


export const handler = serverless(app);
