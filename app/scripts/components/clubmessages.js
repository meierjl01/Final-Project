import React from 'react';
import NewClubMessage from './newclubmessage';
import ClubMessage from './clubmessage';

export default React.createClass({
  render() {
    let clubsmessages;
    // console.log(this.props.messages);
    if (this.props.messages === undefined) {
      clubsmessages = <div />
    } else {
     clubsmessages = this.props.messages.map((message, i, arr) => {
      return (
        <ClubMessage key={i} message={message} />
      )
  })
}
    return (
      <div>
        Messages:
        <ul>{clubsmessages}</ul>
        <NewClubMessage clubId={this.props.clubId}/>
      </div>
    )
  }
});
