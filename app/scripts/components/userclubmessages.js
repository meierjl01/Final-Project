import React from 'react';
import UserClubMessage from './userclubmessage';

export default React.createClass({
  render() {
    let userclubmessages;
    // let username  ;
    if (this.props.messages.length > 0){
      userclubmessages = this.props.messages.map((userclubmessage, i, arr) => {
        return (
          <UserClubMessage key={i} message={userclubmessage} />
        )
      });
    } else if (this.props.messages.length === 0) {
      // username = this.props.user.email;
      userclubmessages = `${this.props.user.email} hasn't written any club messages yet`;
    }
    return (
      <div>
        <h4>{this.props.user.email}'s Club Messages</h4>
        <ul className="club-messages">
          {userclubmessages}
        </ul>
      </div>
    )
  }
});
