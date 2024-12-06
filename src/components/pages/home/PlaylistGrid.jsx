import React, { useContext, useEffect, useState } from 'react';
import { useContexts } from '../../../contexts/Contexts';

// Function to fetch playlists using the access token stored in localStorage
async function fetchUserPlaylists() {
  const accessToken = localStorage.getItem('spotify_access_token');
  if (!accessToken) {
    console.error('No access token found. Please log in.');
    return [];
  }

  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch playlists:', response.statusText);
    return [];
  }

  const data = await response.json();
  return data.items; // Array of playlists
}

const PlaylistGrid = () => {
  const { selectedPlaylist, setSelectedPlaylist, songs, setSong } = useContexts();
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {

      const data = await fetchUserPlaylists();
      console.log(data)
      setPlaylists(data.filter((playlist) => playlist !== null));
      setIsLoading(false);
    };

    fetchData();
  }, []);



  if (isLoading) {
    return <p>Loading playlists...</p>;
  }

  if (playlists.length == 0 || playlists === null) {
    return <p>No playlists found. Please ensure you are logged in to Spotify and have created playlists.</p>;
  }


  return (
    <div>
      <div style={{ overflowY: "auto", flexDirection: "column", justifyItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", backgroundColor: "FFFFFF", borderRadius: "0", textAlign: "center" }}>
          <h1 style={{ flex: "1", justifyContent: "center", color: "#FFFFFF"}}>Your Playlists</h1>

        </div>

        <div style={styles.gridContainer}>
          {playlists.map((playlist, index) => (
            <div key={playlist.id} style={styles.gridItem}>
              <p style={styles.name}>{playlist.name}</p>
              {playlist.images && playlist.images.length > 0 ? (
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  style={styles.image}
                  onClick={() => { setSelectedPlaylist(playlist); }}
                />
              ) : (
                <div onClick={() => { setSelectedPlaylist(playlist) }} style={styles.placeholderImage}>No Image</div>
              )}
              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  gridItem: {
    textAlign: 'left',
    fontWeight: "200",
    width: '150px',
    backgroundColor: "white",
    padding: "20px",
    paddingBottom: "0px",
    paddingTop: "0px",
    borderRadius: "20px",
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  placeholderImage: {
    width: '150px',
    height: '150px',
    backgroundColor: '#ccc',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    color: 'black',
  },
  name: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
  },
};

export default PlaylistGrid;
