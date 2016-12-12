import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
      let button = <input ref="add" type="button" onClick={this.handleAdd} value="Add Book to Future Reads"/>
    if (this.props.inPast === true) {
      button = <input type="button" value="In Past Books Library" />
    } else if (this.props.inFuture === true) {
      button = <input type="button" value="Already In Future Books Library" />
    } else if (this.props.inCurrent === true) {
      button = <input type="button" value="Current Book" />
    }
    // console.log(this.props.inPast, this.props.inFuture, this.props.inCurrent);
    return (
      <li>
        <span>{this.props.book.best_book.title}</span>
        <span>Rating: {this.props.book.average_rating}</span>
        <img alt="book's cover image" src={this.props.book.best_book.image_url} />
        <span>{this.props.book.best_book.author.name}</span>
        {button}
      </li>
    )
  },
  handleAdd(e) {
    e.preventDefault();
    let title = this.props.book.best_book.title;
    let rating = this.props.book.average_rating;
    let image = this.props.book.best_book.image_url;
    let author = this.props.book.best_book.author.name;
    store.clubs.get(this.props.clubId).addToFuture({title, rating, image, author});
  },
});
