import React from 'react';

export default React.createClass({
  render() {
    // console.log(this.props.message);
    return (
      <li>
      On {new Date(this.props.message.created).toString()}
      <Link to={`/user/${this.props.message.ownerId}`}>{this.props.message.email}</Link> said:
      "{this.props.message.message}"
      </li>
    )
  }
});
