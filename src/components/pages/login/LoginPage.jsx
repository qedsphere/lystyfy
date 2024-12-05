import React from 'react'
import { useState, useEffect} from 'react'
import "./LoginPage.css"
import Panel from "../../templates/Panel"
{/*<div style={{ height: '100%', width: '100%' }}>*/}

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '8d1e423dbdb44bb28b723ac07490f178'; 
const REDIRECT_URI = 'http://localhost:5173/callback'; 
const SCOPES = 'user-library-read user-read-private playlist-read-private playlist-modify-public playlist-modify-private '; 

function LoginPage() {
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const url = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
    setAuthUrl(url);
  }, []);

  return (
    <div id='frame1' className='frame1'>
      <a href={authUrl}>
        <button className="button">Log in with Spotify</button>
      </a>
      <div id='lystyfy' className='lystyfy'>
        lystyfy
      </div>
      <div id='diamond' className='diamond'>
        ⟡
      </div>
      <div id='diamond2' className='diamond2'>
        ⟡
      </div>
      <div id='diamond3' className='diamond3'>
        ⟡
      </div>
      <div id='diamond4' className='diamond4'>
        ⟡
      </div>
      <div id='diamond5' className='diamond5'>
        ⟡
      </div>
      <div id='diamond6' className='diamond6'>
        ⟡
      </div>
      <div id='diamond7' className='diamond7'>
        ⟡
      </div>
      <div id='diamond8' className='diamond8'>
        ⟡
      </div>
      <div id='diamond9' className='diamond9'>
        ⟡
      </div>
    </div>
  );
}

export default LoginPage;