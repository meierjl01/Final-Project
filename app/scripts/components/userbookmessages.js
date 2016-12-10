import React from 'react';
import UserBookMessage from './userbookmessage';

export default React.createClass({
  render() {
    // console.log(this.props.messages);
    let userbookmessages;
    if(this.props.bookMessages === undefined) {
      userbookmessages = <div />
    } else {
      userbookmessages = this.props.bookMessages.map((userbookmessage, i, arr) => {
        return (
          <UserBookMessage key={i} message={userbookmessage} />
        )
      })
    }
    return (
      <ul>
        Book Messages:
        {userbookmessages}
      </ul>
    )
  }
});
