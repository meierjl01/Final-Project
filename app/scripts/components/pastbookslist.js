import React from 'react';

export default React.createClass({
  render() {
    return (
      <li>
        <span>{this.props.Past.title}</span>
        <span>Rating: {this.props.Past.rating}</span>
        <img src={this.props.Past.image} />
        <span>{this.props.Past.author}</span>
      </li>
    )
  }
});
