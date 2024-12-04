//let me cook! 
//  ^ _ ^
// (o . o)   
//   > <
//   | |

import axios from 'axios';

const Create = async (songs) => {
    const token = localStorage.getItem('spotify_access_token');
    const url = 'https://api.spotify.com/v1/me';
    let user_id = 'nothing for now'; //user's id is retrieved by the below request
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
        console.log(data)
        user_id= data.id;
        console.log(user_id);
    } catch (error) {
        console.error('Error getting user', error);
    }

    //now make the playlist and store its id for future 
    let playlist_id='nothing for now as well';
    const url2 = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    try {
        const response = await fetch(url2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                "name": "Title",
                "description": "Sorted by Lystyfy",
                "public": false,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch playlist songs');
        }

        const data = await response.json();
        playlist_id = data.id;
        console.log(playlist_id);
    } catch (error) {
        console.error('Error getting user', error);
    }

    //now, add the songs in order to the new playlist
    const url3 = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
    let songs2add = [];
    {songs.map((song, index)=>(
        songs2add.push(add.song.uri)
    ))}
    console.log(songs);
    /*try {
        const response = await fetch(url2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                "name": "Title",
                "description": "Sorted by Lystyfy",
                "public": false,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch playlist songs');
        }

        const data = await response.json();
        playlistid = data.id;
        console.log(playlistid);
    } catch (error) {
        console.error('Error getting user', error);
    }*/
    
    return 'nothing';
};

export default Create;