import { useEffect, useState } from 'react'


export default function Quote() {

    const [quote, setQuote] = useState([])
    useEffect(() => {
        const getQuote = async () => {
            try {





                const response = await fetch("https://1nthp3keje.execute-api.ap-south-1.amazonaws.com/api/quotes");
                // const response = await fetch("http://localhost:3000/api/quotes");
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
