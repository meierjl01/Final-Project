import React from 'react';
import FutureBooksList from './futurebookslist';

export default React.createClass({
  render() {
        // console.log(this.props.clubId);
    let future = this.props.future.map((future, i, arr) => {
      return (
        <FutureBooksList clubId={this.props.clubId} key={i} future={future}/>
      )
    })
    return (
      <div>
        <h3>Future Books</h3>
        <ul>{future}</ul>
      </div>
    )
  }
});
