import React, { Component } from 'react';
const backEndLoginURI = "http://localhost:3000/auth/spotify"

class Login extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to Spotify Love Calculator 😉❤️</h1>
        <a href={backEndLoginURI} >
            <button>Login With Spotify!</button>
        </a>
      </div>
    )
  }
}

export default Login