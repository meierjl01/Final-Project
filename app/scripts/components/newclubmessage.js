import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return(
      <form onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <input type="button" value="Publish" />
      </form>
    )
  },
  handleMessage(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let timestamp = new Date();
    let ownerId = window.localStorage.getItem('ownerId');
    store.messages.addMessage({message, timestamp, ownerId});
  }
});
