import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.name);
    if(this.props === undefined) {
      return (
        <div />
      )
    } else {
    return(
      <form className="club-message-form" onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <div>
          <input className="publish" type="submit" value="Publish" />
        </div>
      </form>
    )
  }
  },
  handleMessage(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let email = window.localStorage.getItem('email');
    let club = this.props.name;
    this.refs.note.value = "";
    store.clubs.get(this.props.clubId).addMessageToClub({message, email, club});
  }
});
