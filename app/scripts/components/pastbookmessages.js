import React from 'react';
import PastBookMessage from './pastbookmessage';

export default React.createClass({
  render() {
    // console.log(this.props.Past);
    let pastmessages;
      if(!this.props.Past) {
        pastmessages = <div />
      } else if (!this.props.Past.bookmessages) {
        pastmessages = <div />
    } else {
      pastmessages = this.props.Past.bookmessages.map((bookmessage, i, arr) => {
        return (
          <PastBookMessage key={i} message={bookmessage}/>
        )
      })
    }
    return (
      <ul className="book-messages">
        Messages:
        {pastmessages}
      </ul>
    )
  }
});
