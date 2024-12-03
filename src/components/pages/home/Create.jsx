//let me cook! 
//  ^ _ ^
// (o . o)   
//   > <
//   | |

import axios from 'axios';

const Create = async (songs) => {
    const token = localStorage.getItem('spotify_access_token'); 
    const user_id='nothing for now'; //need to send a get current user's profile request, which returns an object with .id property

    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    

    console.log(songs);
    return 'nothing';
};

/* just for reference. i haven't memorized the syntax :P
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
      //console.log(data)
      let temp = data.items.map(item => item.track);
      temp = temp.filter(album => album !== null);     
      setSongs(temp); 
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  fetchPlaylistSongs();*/
export default Create;