import React from 'react'
import { useState, useEffect} from 'react'
import "./LoginPage.css"
import Panel from "../../templates/Panel"
{/*<div style={{ height: '100%', width: '100%' }}>*/}

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'ce817eb205084d69ace124baa8a5fa0c'; 
const REDIRECT_URI = 'http://localhost:5173/callback'; 
const SCOPES = 'user-library-read user-read-private playlist-read-private playlist-modify-public playlist-modify-private '; 

function LoginPage() {
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const url = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
    setAuthUrl(url);
  }, []);

  return (
    <div id='frame1' class='frame1'>
      <a href={authUrl}>
        <button class="button">Log in with Spotify</button>
      </a>
      <div id='lystyfy' class='lystyfy'>
        lystyfy
      </div>
      <img id='wave' class='wave' src='./images/wave.png' />
      <div id='diamond' class='diamond'>
        ⟡
      </div>
      <div id='diamond2' class='diamond2'>
        ⟡
      </div>
      <div id='diamond3' class='diamond3'>
        ⟡
      </div>
      <div id='diamond4' class='diamond4'>
        ⟡
      </div>
      <div id='diamond5' class='diamond5'>
        ⟡
      </div>
      <div id='diamond6' class='diamond6'>
        ⟡
      </div>
      <div id='diamond7' class='diamond7'>
        ⟡
      </div>
      <div id='diamond8' class='diamond8'>
        ⟡
      </div>
      <div id='diamond9' class='diamond9'>
        ⟡
      </div>
    </div>
  );
}

export default LoginPage;