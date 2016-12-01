import React from 'react';
import FutureBooksList from './futurebookslist';

export default React.createClass({
  render() {
    let future;
    console.log(this.props);
    return (
      <div>
        <h3>Future Books:</h3>
        <ul>{future}</ul>
      </div>
    )
  }
});
