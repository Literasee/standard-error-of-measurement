import React, { Component } from 'react'

export default class extends Component {
  render() {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `url(${this.props.img}) center 0 no-repeat`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      width: '100vw',
      height: '100vh',
    }

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}
