import React from 'react';
import UserClubMessage from './userclubmessage';

export default React.createClass({
  render() {
    // console.log(this.props.messages);
    let userclubmessages;
    if(this.props.messages === undefined) {
      userclubmessages = <div />
    } else {
      userclubmessages = this.props.messages.map((userclubmessage, i, arr) => {
        return (
          <UserClubMessage key={i} message={userclubmessage} />
        )
      })
    }
    return (
      <div>
        Club Messages:
        <ul className="club-messages">
          {userclubmessages}
        </ul>
      </div>
    )
  }
});
