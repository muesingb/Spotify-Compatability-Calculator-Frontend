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
    currentUser: ""
  }

  updateCurrentUser = (id) => {
    this.setState({
      currentUser: id
    })
  }

  render() {
    console.log(this.state.currentUser)
    return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(routerProps) => <Login {...routerProps}/>}/>
        <Route path="/user" render={(routerProps) => <UserView {...routerProps} updateCurrentUser={this.updateCurrentUser}/>}/>
        <Route path="/match" render={(routerProps) => <MatchView {...routerProps} currentUser={this.state.currentUser}/>}/>
      </Router>
    </div>
  );
  }
}

export default App;
