import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    // console.log(this.props.message);
    return (
      <li>
      <div>On {moment(this.props.message.created).format('LLLL')}, </div>
      <div><Link className="link" to={`/user/${this.props.message.ownerId}`}>{this.props.message.email}</Link> said: </div>
      "{this.props.message.message}"
      </li>
    )
  }
});
