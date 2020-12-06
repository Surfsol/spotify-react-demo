import React, { useEffect } from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import {getTokenFromResponse} from './spotify'

function Login({setToken}) {
  // useEffect(()=>{
  //   console.log('useEffect')
  //   const hash = getTokenFromResponse();
  //   //after get access token, clear from url
  //   window.location.hash = "";
  //   setToken(hash.access_token)

  // },[])
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
