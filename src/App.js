import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();
const backEndLoginURI = "http://localhost:3000"

class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params)
    this.state = {
      loggedIn: params.access_token ? true : false
    }
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getMyTopArtists() {
    spotifyWebApi.getMyTopArtists()
      .then(data => {
        console.log(data)
        data.items.forEach(artist => console.log(artist.name))
      })
    spotifyWebApi.getMyTopTracks()
      .then(data => {
        console.log(data)
        data.items.forEach(track => console.log(track.name))
      })
  }

  render() {
    console.log(this.state)
    this.getMyTopArtists()
    return (
    <div className="App">
      <a href={backEndLoginURI} >
      <button>Login With Spotify!</button>
      </a>
      <div>
        Now playing {this.state.loggedIn ? "true" : "false"}
      </div>
    </div>
  );
  }
}

export default App;
