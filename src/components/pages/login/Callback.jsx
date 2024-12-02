import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Callback() {
  const [accessToken, setAccessToken] = useState('');
  let navigate = useNavigate()
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace('#', '?')); 

    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
      localStorage.setItem('spotify_access_token', token); 
      navigate("/home");
    }
  }, []);

  return (
    <div>
      {accessToken ? (
        <h1>Redirecting...</h1>
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </div>
  );
}
export default Callback

