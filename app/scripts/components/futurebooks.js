import React from 'react';
import FutureBooksList from './futurebookslist';

export default React.createClass({
  render() {
        // console.log(this.props.Future);
    let Future = this.props.Future.map((Future, i, arr) => {
      return (
        <FutureBooksList clubId={this.props.clubId} key={i} Future={Future}/>
      )
    })
    return (
      <div>
        <h3>Future Books</h3>
        <ul>{Future}</ul>
      </div>
    )
  }
});
