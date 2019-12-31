import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import View from './containers/View'
import Login from './containers/Login'

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(routerProps) => <Login {...routerProps}/>}/>
        <Route path="/user" render={(routerProps) => <View {...routerProps}/>}/>
      </Router>
    </div>
  );
  }
}

export default App;
