import React from 'react'
import { useState, useEffect} from 'react'

import Panel from "../../templates/Panel"
{/*<div style={{ height: '100%', width: '100%' }}>*/}

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '8d1e423dbdb44bb28b723ac07490f178'; 
const REDIRECT_URI = 'http://localhost:5173/callback'; 
const SCOPES = 'user-library-read user-read-private playlist-read-private '; 

function LoginPage() {
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const url = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
    setAuthUrl(url);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center", backgroundColor: "#242424", color: "white" }}>
      <h1>Lystyfy</h1>
      <a href={authUrl}>
      <button className="button-1">
        Connect with Spotify.
      </button>
      </a>
      
    </div>
  );
}

export default LoginPage;