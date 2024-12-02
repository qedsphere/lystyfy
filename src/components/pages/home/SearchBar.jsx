import React, { useState } from 'react';
import './SearchBar.css';  // We'll define the styles in a separate CSS file

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState(''); // To track input text
  const [results, setResults] = useState([]); // To store filtered results

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    
    if (value) {
      const filteredResults = data.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filteredResults)
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-container2">
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      {results.length > 0 && (
        <div className="results-box">
          {results.map((result, index) => (
            <div key={index} className="result-item">{result}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
