import { useEffect, useState } from 'react'


export default function Quote() {

    const [quote, setQuote] = useState([])
    useEffect(() => {
        const getQuote = async () => {
            try {
                // Determine API URL based on environment
                const isDev = import.meta.env.DEV;
                const baseUrl = isDev ? "http://localhost:5000" : (import.meta.env.VITE_API_URL || "http://localhost:5000");

                // Ensure we don't have double slashes if baseUrl ends with /
                const endpoint = baseUrl.endsWith('/') ? `${baseUrl}api/quotes` : `${baseUrl}/api/quotes`;

                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error("Bad response: " + response.status)
                }

                const data = await response.json();
                setQuote(data);

            } catch (error) {
                console.error("Error: ", error.message);
            }
        }

        getQuote();
    }, [])
    return (
        <div className='flex flex-col items-center justify-center p-8 md:p-12 text-center max-w-4xl mx-auto'>
            {quote.length > 0 ? (
                <>
                    <div style={{ fontFamily: '"Playfair Display", serif' }} className='text-3xl md:text-5xl text-white dark:text-white text-light-text mb-6 leading-tight tracking-wide drop-shadow-lg'>
                        "{quote[0].q}"
                    </div>
                    <div className='text-xl md:text-2xl text-primary font-light italic mt-2 animate-fade-in'>
                        — {quote[0].a}
                    </div>
                </>
            ) : (
                <div className="text-muted animate-pulse">Loading inspiration...</div>
            )}
        </div>
    )
}
