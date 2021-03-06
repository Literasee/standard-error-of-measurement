import React, { Component } from 'react'

class FeatureAside extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          right: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexDirection: 'column',
          fontSize: '2rem',
          width: '30vw',
          padding: '0 2rem'
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

module.exports = FeatureAside
