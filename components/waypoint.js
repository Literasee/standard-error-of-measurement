import React from 'react'
import IdyllComponent from 'idyll-component'

export default class extends IdyllComponent {
  render() {
    const style = { height: '100vh' }
    if (this.props.center) {
      style.display = 'flex'
      style.flexDirection = 'column'
      style.justifyContent = 'center'
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}
