import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.current);
    return (
      <form className="current-book-message" onSubmit={this.handleNewMessage}>
        <textarea placeholder="Join the conversation!" ref="message" />
        <input type="submit" value="Publish" />
      </form>
    )
  },
  handleNewMessage(e) {
    e.preventDefault();
    let message = this.refs.message.value;
    let email = window.localStorage.getItem('email');
    let objectId = this.props.current.objectId;
    console.log(message, objectId, email);
    store.clubs.get(this.props.clubId).addMessageToBook({message, objectId, email});
  }
})
