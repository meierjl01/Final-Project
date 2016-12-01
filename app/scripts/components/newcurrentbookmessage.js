import React from 'react';

export default React.createClass({
  render() {
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
    console.log(message, email);
    // store.clubs.get(this.props.clubId).addMessageToClub({message, email});
  }
})
