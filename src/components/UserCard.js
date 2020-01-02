import React, { Component } from 'react';

class UserCard extends Component {

  render() {
    return (
      <div>
        <img src={this.props.user_data.image} />
        <h1>{this.props.user_data.display_name}</h1>
        <h2>Your Top Artist</h2>
        {this.props.top_artist.name}
        <h2>Your Top Track</h2>
        {this.props.top_track.name}
      </div>
    )
  }
}

export default UserCard