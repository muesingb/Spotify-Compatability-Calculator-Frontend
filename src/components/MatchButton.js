import React, { Component, Fragment } from 'react';

class MatchButton extends Component {

  render() {
    return (
      <>
        <button onClick={() => this.props.push('/match')}>Find Your Match!</button>
      </>
    )
  }
}

export default MatchButton