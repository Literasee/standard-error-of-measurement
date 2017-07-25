const React = require('react');
const ReactDOM = require('react-dom');

class FeatureContent extends React.Component {
  render () {
    return <div style={this.props.style}>
      {this.props.children}
    </div>
  }
}

module.exports = FeatureContent;
