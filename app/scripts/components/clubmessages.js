import React from 'react';
import NewClubMessage from './newclubmessage';

export default React.createClass({
  render() {
    return (
      <div>
      <ul>
        Messages:
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <NewClubMessage />
      </div>
    )
  }
});
