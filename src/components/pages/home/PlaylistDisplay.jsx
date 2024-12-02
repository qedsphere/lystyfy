import React, { useEffect, useState } from 'react';
import Panel from '../../templates/Panel';
import { usePlaylist } from '../../../contexts/PlaylistContext'; 

const PlaylistDisplay = () => {
  const { selectedPlaylist } = usePlaylist(); 
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchPlaylistSongs = async () => {
      if (!selectedPlaylist) return; 

      const token = localStorage.getItem('spotify_access_token'); 
      const url = `https://api.spotify.com/v1/playlists/${selectedPlaylist.id}/tracks`;

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch playlist songs');
        }

        const data = await response.json();
        setSongs(data.items.map(item => item.track)); 
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchPlaylistSongs();
  }, [selectedPlaylist]); 

  if (!selectedPlaylist) {
    return <div>Please select a playlist to view its songs.</div>;
  }

  return (
    <div>
      <h2>{selectedPlaylist.name} - Songs</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {songs.map((song) => (
          <Panel
            key={song.id}
            backgroundColor="#ffffff"
            borderRadius="10px"
            flexWidth="1"
            topMargin="10px"
            leftMargin="10px"
            rightMargin="10px"
          >
            
              <Panel backgroundColor='black' flexWidth="0.2" topMargin="0" bottomMargin="0" leftMargin="10px" rightMargin="10px" children={{}}>
                <img
                  src={song.album.images[0]?.url}
                  alt={song.name}
                  style={{ width: '50px', height: '50px', borderRadius: '5px' }}
                />
                
              </Panel>

              {/* Song and Artist Information */}
              <Panel flexWidth="0.8" topMargin="" bottomMargin="" leftMargin="5px" rightMargin="5px">
                <div style={{ fontSize:'8pt', color: 'black', display: 'flex', flexDirection: 'column' }}>
                  <strong >{song.name}</strong>
                  <span>{song.artists[0].name}</span>
                </div>
              </Panel>
          </Panel>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDisplay;
