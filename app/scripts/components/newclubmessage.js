import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(store.clubs);
    return(
      <form onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <input type="submit" value="Publish" />
      </form>
    )
  },
  handleMessage() {
    e.preventDefault();
    let message = this.refs.note.value;
    let timestamp = new Date();
    store.clubs.get(this.props.clubId).addMessageToClub({message, timestamp});
  }
});
