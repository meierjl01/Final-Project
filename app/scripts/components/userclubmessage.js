import React from 'react';
import moment from 'moment';

export default React.createClass({
  render() {
    return (
      <li>
        On {moment(this.props.message.created).format('LLLL')},
        {this.props.message.email} said:
        "{this.props.message.message}"
        in the {this.props.message.club} chat.
      </li>
    )
  }
})
