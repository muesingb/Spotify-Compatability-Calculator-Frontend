import React, { Component } from 'react';
import UserCard from '../components/UserCard'
import MatchButton from '../components/MatchButton'

class UserView extends Component {

  state = {
    user: this.props.location.pathname.replace('/user/', '')
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/users/${this.state.user}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.props.updateCurrentUser(data)
    })
  }

  render() {
    return (
      <div>
        <UserCard {...this.props}/>
        <MatchButton {...this.props.history} toggleView={this.props.toggleView}/>
      </div>
    )
  }
}

export default UserView