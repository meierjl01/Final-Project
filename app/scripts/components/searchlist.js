import React from 'react';
import SearchItem from './searchitem';

export default React.createClass({
  render() {
    // console.log(this.props.books);
    let BooksList = this.props.books.map((book, i, arr) => {
      return (
        <SearchItem key={i} book={book}/>
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
