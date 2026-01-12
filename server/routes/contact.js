const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Create transporter
    // We use environment variables for security
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail', // Default to gmail
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to self
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

module.exports = router;
