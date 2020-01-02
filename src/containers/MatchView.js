import React, { Component } from 'react';
import UserCard from '../components/UserCard'
import MatchCard from '../components/MatchCard'

class MatchView extends Component {
    //state holds top_match data
    state = {
        user_data: [],
        artists_data: [],
        tracks_data: [],
        top_artist: {},
        top_track: {}
      }

    componentDidMount = () => {
        fetch(`http://localhost:3000/users/${this.props.user_data.top_match}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                user_data: data.user,
                artists_data: data.artists,
                tracks_data: data.tracks,
                top_artist: data.artists[0],
                top_track: data.tracks[0],
                view: "profile"
                })
        })
    }

  render() {
    return (
      <div>
        <h1>Your Top Match!!</h1>
        <UserCard {...this.props}/>
        <MatchCard />
        <UserCard {...this.state}/>
      </div>
    )
  }
}

export default MatchView