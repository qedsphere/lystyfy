import React, { createContext, useState, useContext } from 'react';

const SongsContext = createContext();

export const useSongs = () => {
  return useContext(SongsContext);
};



export const SongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  
  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongsContext.Provider>
  );
};
