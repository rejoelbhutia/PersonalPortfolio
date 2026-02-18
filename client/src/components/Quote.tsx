import { useEffect, useState } from 'react';

interface  Quote{
  text: string
  author: string
}

  const fallbackQuote: Quote = {
    text: "Keep pushing forward.",
    author: "Unknown",
  };

export default function Quote() {
  const [quote, setQuote] = useState<Quote>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted: boolean = true; // cleanup flag

    const getQuote = async (): Promise<void> => {

      const savedQuote = sessionStorage.getItem('app_quote');
      if (savedQuote) {
        setQuote(JSON.parse(savedQuote));
        setLoading(false);
        return;
      }
      try {
        const response = await fetch("https://1nthp3keje.execute-api.ap-south-1.amazonaws.com/api/quotes"); // or your API URL
        if (!response.ok) throw new Error("Bad response: " + response.status);
        const data: Quote | Quote[] = await response.json();

        if (isMounted) {
          // If data is an array, pick a random quote, else use it directly
          const selectedQuote = Array.isArray(data) ? data[Math.floor(Math.random() * data.length)] : data;
          sessionStorage.setItem('app_quote', JSON.stringify(selectedQuote));
          setQuote(selectedQuote);
          setLoading(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching quote:", error.message);
          setQuote(fallbackQuote);
        }
        
        if (isMounted) setLoading(false);
      }
    };

    getQuote();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center max-w-4xl mx-auto">
      {loading ? (
        <div className="text-muted animate-pulse">Loading inspiration...</div>
      ) : quote ? (
        <>
         <div
  style={{ fontFamily: '"Playfair Display", serif' }}
  className="text-3xl md:text-5xl text-white dark:text-white text-light-text mb-6 leading-tight tracking-wide drop-shadow-lg animate-pulse-scale"
>
  "{quote.text}"
</div>

          <div className="text-xl md:text-2xl text-primary font-light italic mt-2 animate-fade-in">
            — {quote.author}
          </div>
        </>
      ) : (
        <div className="text-red-400">No quote available</div>
      )}
    </div>
  );
}
