import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      fetch('https://api.punkapi.com/v2/beers', [])
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response;
        })
        .then(data => setData(data))
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(
          () => setIsLoading(false)
        );
    })();
  }, []);

  return (
    <div>
      {isLoading ? 'Loading...' : data[0]?.name}
    </div>
  );
};

export default App