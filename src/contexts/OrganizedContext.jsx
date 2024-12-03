import React, { createContext, useState, useContext } from 'react';

const OrganizedPlaylistContext = createContext();

export const useOrganized = () => {
  return useContext(OrganizedPlaylistContext);
};



export const OrganizedPlaylistProvider = ({ children }) => {
  const [organized, setOrganized] = useState(null);
  
  return (
    <OrganizedPlaylistContext.Provider value={{ organized, setOrganized }}>
      {children}
    </OrganizedPlaylistContext.Provider>
  );
};
