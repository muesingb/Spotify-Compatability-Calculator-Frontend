import React, { Component } from 'react';

class UserCard extends Component {

  render() {
    return (
      <div>
        <img src={this.props.user_data.image} />
        <h1>{this.props.user_data.display_name}</h1>
      </div>
    )
  }
}

export default UserCard