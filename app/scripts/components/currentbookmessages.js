import React from 'react';
import CurrentBookMessage from './currentbookmessage';

export default React.createClass({
  render() {
    // console.log(this.props.current);
    let currentmessages;

    if (this.props.current === undefined) {
      currentmessages = <div />
    } else
      currentmessages = this.props.current.bookmessages.map((bookmessage, i, arr) => {
      return (
        <CurrentBookMessage bookId={this.props.current.objectId} message={bookmessage} key={i}/>
      )
    })
    return (
      <div>
        Messages about this book:
        <ul>{currentmessages}</ul>
      </div>
    )
  }
});
