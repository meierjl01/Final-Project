import React from 'react';
import CurrentBookMessage from './currentbookmessage';

export default React.createClass({
  render() {
    // console.log(this.props);
    let currentmessages;

    if (!this.props.current) {
      currentmessages = <div />
    } else if (!this.props.current.bookmessages) {
      currentmessages = <div />
    } else {
      currentmessages = this.props.current.bookmessages.map((bookmessage, i, arr) => {
      return (
        <CurrentBookMessage clubId={this.props.clubId} bookId={this.props.current.objectId} message={bookmessage} key={i}/>
      )
    })
  }
    return (
      <div className="current-book-messages">
        Messages about this book:
        <ul>{currentmessages}</ul>
      </div>
    )
  }
});
