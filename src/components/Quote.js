import { useState, useEffect } from 'react';
import './quote.css';

export default function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'X-Api-Key': '6d3biugl0XQ3WcBvtFawHw==eTmgR9F1cXsHz5wO',
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="quote-page">
        {data.map((item) => (
          <p key={item.author}>{item.quote}</p>
        ))}
      </div>
    </>

  );
}
