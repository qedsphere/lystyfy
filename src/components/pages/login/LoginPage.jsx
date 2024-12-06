import React from 'react'
import { useState, useEffect } from 'react'
import "./LoginPage.css"
import Panel from "../../templates/Panel"
import wave from './images/wave.png';
{/*<div style={{ height: '100%', width: '100%' }}>*/ }

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
    <div id='frame1' className='frame1'>
      <a href={authUrl}>
        <button className="button">Login</button>
      </a>
      <div id='lystyfy' className='lystyfy'>
        lystyfy
      </div>
      <div>
  <img src={wave} alt="Wave" className="wave" />
</div>
    </div>
  );
}

export default LoginPage;