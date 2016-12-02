import React from 'react';
import SearchItem from './searchitem';

export default React.createClass({
  render() {
    // console.log(this.props);
    // console.log(this.props.clubId);
    let BooksList = this.props.books.map((book, i, arr) => {
      return (
        <SearchItem clubId={this.props.clubId} key={i} book={book}/>
      )
    });
    return (
      <div>
        <ul>
        {BooksList}
        </ul>
      </div>
    )
  }
});
