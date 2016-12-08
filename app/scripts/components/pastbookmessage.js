import React from 'react';
import moment from 'moment';

export default React.createClass({
  render() {
    // console.log(this.props.message);
    return (
      <li>
      On {moment(this.props.message.created).format('LLLL')}
      <Link to={`/user/${this.props.message.ownerId}`}>{this.props.message.email}</Link> said:
      "{this.props.message.message}"
      </li>
    )
  }
});
