import express, { Request, Response } from 'express';
const router = express.Router();

interface Quote {
    q: string;
    a: string;
    h: string;
}

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await fetch("https://zenquotes.io/api/random");

        if (!response.ok) {
            throw new Error(`ZenQuotes API responded with status: ${response.status}`);
        }

        const data = (await response.json()) as Quote[];
        const quote = data[0];
        if (!quote) {
            return res.status(500).json({success: false, message: "No quote fetched "})
        }
        res.json({ text: quote.q, author: quote.a });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching quote:", error);
        } else {
            console.log("Unknown error");
        }
        res.status(500).json({ error: "Failed to fetch quote" });
    }
});

export default router;
