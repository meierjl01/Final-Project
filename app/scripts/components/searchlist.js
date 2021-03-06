import React from 'react';
import SearchItem from './searchitem';

export default React.createClass({
  render() {

    let classname;

    if(this.props.books.length === 0) {
      classname = "hidden";
    } else {
      classname = "search-container";
    }

    let BooksList = this.props.books.map((book, i, arr) => {
      let searchPast = this.props.club.Past.filter((pastbook, i, arr) => {
        return pastbook.title === book.best_book.title && pastbook.author === book.best_book.author.name
      })
      let searchFuture = this.props.club.Future.filter((futurebook, i, arr) => {
        return futurebook.title === book.best_book.title && futurebook.author === book.best_book.author.name
      })
      let searchCurrent = this.props.club.Current.filter((currentbook, i, arr) => {
        return currentbook.title === book.best_book.title && currentbook.author === book.best_book.author.name
      })

      return (
        <SearchItem inPast={Boolean(searchPast.length)} inCurrent={Boolean(searchCurrent.length)} inFuture={Boolean(searchFuture.length)} clubId={this.props.clubId} key={i} book={book}/>
      )
    });
    return (
        <ul className={classname}>
        {BooksList}
        </ul>
    )
  }
});
