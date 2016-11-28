import React from 'react';

export default React.createClass({
  render() {
    return(
      <form onSubmit={this.handleMessage}>
        <textarea placeholder="Join the conversation!" ref="note" />
        <input type="submit" value="Publish" />
      </form>
    )
  },
  handleMessage(e) {
    e.preventDefault;
    let message = this.refs.note.value;
  }
})
