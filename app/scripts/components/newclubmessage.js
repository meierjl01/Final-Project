import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.clubId);
    return(
      <form onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <input type="submit" value="Publish" />
      </form>
    )
  },
  handleMessage(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let email = window.localStorage.getItem('email');
    store.clubs.get(this.props.clubId).addMessageToClub({message, email});
  }
});
