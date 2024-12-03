import React, { createContext, useState, useContext } from 'react';

const Contexts = createContext();

export const useContexts = () => {
  return useContext(Contexts);
};

export const ContextsProvider = ({ children }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  
  return (
    <Contexts.Provider value={{ 
        selectedPlaylist,
        setSelectedPlaylist,
        songs,
        setSongs,
    }}>
      {children}
    </Contexts.Provider>
  );
};
