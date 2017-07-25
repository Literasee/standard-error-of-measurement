import React, { Component } from 'react'

export default props => {
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
      {props.children}
    </div>
  )
}
