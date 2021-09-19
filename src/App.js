import React, { useEffect, useState } from 'react'
import Accordion from './components/Accordion/Accordion';
import Grid from './components/Grid/Grid';
const App = () => {
  const [data, setData] = useState({});
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
      <>
        <h1>Accordion</h1>
        <Accordion
          data={data}
          isLoading={isLoading}
        />

        <h1>Grid</h1>
        <Grid
          data={data}
          isLoading={isLoading}
        />
      </>
  );
};

export default App