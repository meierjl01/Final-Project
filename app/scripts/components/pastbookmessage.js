import React from 'react';

export default React.createClass({
  render() {
    // console.log(this.props.message);
    return (
      <li>
      On {new Date(this.props.message.created).toString()}
      {this.props.message.email} said:
      "{this.props.message.message}"
      </li>
    )
  }
});
