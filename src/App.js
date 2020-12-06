import React, {useState, useEffect } from 'react';
import SpotifyPlayerContainer from './SpotifyPlayerContainer';
import Login from './login/Login';
import { getTokenFromResponse } from './login/spotify';

const App = () => {
  const[token, setToken]=useState()
  useEffect(() => {
    const hash = getTokenFromResponse();
    //after get access token, clear from url
    window.location.hash = '';
    setToken(hash.access_token);
  }, []);
  console.log('token', token)
    if (!token) {
      return(
      <Login setToken={setToken}/>
      )
    } else {
      return (
        <SpotifyPlayerContainer playingRecordingId="spotify:track:4iV5W9uYEdYUVa79Axb7Rh" token={token}/>
      );
    }
}

export default App;
