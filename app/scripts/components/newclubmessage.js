import React from 'react';
import store from '../store';
import $ from 'jquery';

export default React.createClass({
  render() {
    console.log(this.props);
    if(this.props === undefined) {
      $('.publish-club-message').prop('disabled', true);
    }
    return(
      <form onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <input className="publish-club-message" type="submit" value="Publish" />
      </form>
    )
  },
  handleMessage(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let email = window.localStorage.getItem('email');
    this.refs.note.value = "";
    store.clubs.get(this.props.clubId).addMessageToClub({message, email});
  }
});
