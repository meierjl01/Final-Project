import React from 'react';
import NewClubMessage from './newclubmessage';
import ClubMessage from './clubmessage';

export default React.createClass({
  render() {
    let clubsmessages;
    // console.log(this.props);
    if (this.props.Messages === undefined) {
      clubsmessages = <div />
    } else {
     clubsmessages = this.props.Messages.map((message, i, arr) => {
      return (
        <ClubMessage key={i} message={message} clubId={this.props.clubId}/>
      )
  })
}
    return (
      <div className="club-messages-container">
        <h3>Messages: </h3>
        <ul>{clubsmessages}</ul>
        <NewClubMessage name={this.props.clubName} clubId={this.props.clubId}/>
      </div>
    )
  }
});
