import React from 'react';
import UserBookMessage from './userbookmessage';

export default React.createClass({
  render() {
    let userbookmessages;
    let username;
    if (this.props.bookMessages.length > 0){
      // console.log(this.props.bookMessages.length);
      userbookmessages = this.props.bookMessages.map((userbookmessage, i, arr) => {
        return (
          <UserBookMessage key={i} message={userbookmessage} />
        )
      });
    } else if (this.props.bookMessages.length === 0) {
      // username = this.props.user.email;
      userbookmessages = `${this.props.user.email} hasn't written any book messages yet`;
    }
    return (
      <div>
      <h4>{this.props.user.email}'s Book Messages: </h4>
      <ul className="book-messages">
        {userbookmessages}
      </ul>
      </div>
    )
  }
});
