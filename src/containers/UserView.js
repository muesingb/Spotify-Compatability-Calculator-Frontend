import React, { Component } from 'react';
import UserCard from '../components/UserCard'
import MatchButton from '../components/MatchButton'

class UserView extends Component {

  state = {
    user_data: [],
    user: this.props.location.pathname.replace('/user/', ''),
    artists_data: [],
    tracks_data: [],
    top_artist: {},
    top_track: {}
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/users/${this.state.user}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      this.setState({
        user_data: data.user,
        artists_data: data.artists,
        tracks_data: data.tracks,
        top_artist: data.artists[0],
        top_track: data.tracks[0]
      })
      this.props.updateCurrentUser(this.state.user)
    })
  }

  render() {
    return (
      <div>
        <UserCard user_data={this.state.user_data}/>
        <h2>Your Top Artist</h2>
        {this.state.top_artist.name}
        <h2>Your Top Track</h2>
        {this.state.top_track.name}
        <br /><br />
        <MatchButton {...this.props.history}/>
      </div>
    )
  }
}

export default UserView