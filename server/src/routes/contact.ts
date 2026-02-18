import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

interface ReqBody {
    name: string;
    email: string;
    message: string;
}

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { name, email, message } = req.body as ReqBody;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to yourself
                subject: `Portfolio Contact: ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                replyTo: email
            });
            res.status(200).json({ message: 'Message sent successfully' });
        } else {
            console.log('Email credentials not found. Logging message:', { name, email, message });
            res.status(200).json({ message: 'Message logged (Email not configured)' });
        }
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

export default router;
