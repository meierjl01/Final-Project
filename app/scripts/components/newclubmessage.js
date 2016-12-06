import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    if(this.props === undefined) {
      return (
        <div />
      )
    } else {
    return(
      <form onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <input className="publish-club-message" type="submit" value="Publish" />
      </form>
    )
  }
  },
  handleMessage(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let email = window.localStorage.getItem('email');
    this.refs.note.value = "";
    store.clubs.get(this.props.clubId).addMessageToClub({message, email});
  }
});
