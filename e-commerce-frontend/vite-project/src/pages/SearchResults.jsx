import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/search`, {
          params: { query }
        });
        setResults(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div>
      {error && <p>Error fetching search results: {error.message}</p>}
      {results.map(result => (
        <div key={result.id}>
          <h3>{result.name}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
