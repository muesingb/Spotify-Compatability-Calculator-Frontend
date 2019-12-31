import React, { Component } from 'react';

class View extends Component {

  state = {
    user_data: [],
    user: this.props.location.pathname.replace('/user/', ''),
    artists_data: [],
    tracks_data: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/users/${this.state.user}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user_data: data.user,
        artists_data: data.artists,
        tracks_data: data.tracks
      })
    })
  }

  renderArtists = () => {
    return this.state.artists_data.map(artist => artist.name)
  }

  renderTracks = () => {
    return  this.state.tracks_data.map(track => track.name)
  }

  render() {
    // console.log(this.props.location.pathname.replace('/user/', ''))
    console.log(this.state.user_data)
    console.log(this.state.artists_data)
    console.log(this.state.tracks_data)
    return (
      <div>
        <h1>Hi {this.state.user_data.display_name}</h1>
        <h1>Your Top Artists</h1>
        {this.renderArtists()}
        <h1>Your Top Tracks</h1>
        {this.renderTracks()}
      </div>
    )
  }
}

export default View