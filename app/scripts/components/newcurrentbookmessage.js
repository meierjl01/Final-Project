import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    if (this.props === undefined) {
      return (
        <div />
      )
    } else {
      return(
        <form className="current-book-message" onSubmit={this.handleNewMessage}>
          <textarea placeholder="Join the conversation about this book" ref="message" />
          <div className="publish-book-note"><input type="submit" value="Publish" /></div>
        </form>
      )
    }
  },
  handleNewMessage(e) {
    e.preventDefault();
    let message = this.refs.message.value;
    let email = window.localStorage.getItem('email');
    let bookId = this.props.current.objectId;
    // console.log(message, objectId, email);
    this.refs.message.value = "";
    store.clubs.get(this.props.clubId).addMessageToBook({message, bookId, email});
  }
})
