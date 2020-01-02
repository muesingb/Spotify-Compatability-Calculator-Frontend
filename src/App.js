import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import UserView from './containers/UserView'
import MatchView from './containers/MatchView'
import Login from './containers/Login'

class App extends React.Component {

  state = {
    user_data: [],
    artists_data: [],
    tracks_data: [],
    top_artist: {},
    top_track: {}
  }

  updateCurrentUser = (data) => {
    this.setState({
      user_data: data.user,
      artists_data: data.artists,
      tracks_data: data.tracks,
      top_artist: data.artists[0],
      top_track: data.tracks[0]
    })
  }

  render() {
    console.log(this.state)
    return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(routerProps) => <Login {...routerProps}/>}/>
        <Route path="/user" render={(routerProps) => <UserView {...routerProps} {...this.state} updateCurrentUser={this.updateCurrentUser} toggleView={this.toggleView}/>}/>
        <Route path="/match" render={(routerProps) => <MatchView {...routerProps} {...this.state} currentUser={this.state.currentUser}/>}/>
      </Router>
    </div>
  );
  }
}

export default App;
