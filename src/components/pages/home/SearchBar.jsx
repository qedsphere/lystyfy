import React, { useState, useContext } from 'react';
import './SearchBar.css'; 
import { useContexts } from '../../../contexts/Contexts';



const SearchBar = ({ data }) => {
  const [query, setQuery] = useState(''); 
  const [results, setResults] = useState([]); 
  const [playlists, setPlaylists] = useState([]);

  const { selectedPlaylist, setSelectedPlaylist, songs, setSongs } = useContexts(); 

    const makeGlobal = (index) => 
    {
      setSelectedPlaylist(playlists[index]);
    }
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    
    if (value) {
      if (query !== ""){
        data(query).then( (values)=>{
          values = values.filter((playlist) => playlist !== null)
          let filteredResults = values.map((playlist) => playlist.name)
          setResults(filteredResults);
          setPlaylists(values)
        }
          

        )
        
      }
      
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
            <div onClick={(event)=>{
              makeGlobal(index);
            }} key={index} className="result-item">{result}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
