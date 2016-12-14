import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
      let button = <input ref="add" type="button" onClick={this.handleAdd} value="Add Book to Future Reads"/>
    if (this.props.inPast === true) {
      button = <input type="button" className="save" value="In Past Books Library" />
    } else if (this.props.inFuture === true) {
      button = <input className="save" type="button" value="Already In Future Books Library" />
    } else if (this.props.inCurrent === true) {
      button = <input className="save" type="button" value="Current Book" />
    }
    // console.log(this.props.inPast, this.props.inFuture, this.props.inCurrent);
    return (
      <li className="search-item">
        <div className="book-pic">
          <img alt="book's cover image" src={this.props.book.best_book.image_url} />
        </div>
        <div className="book-info">
          <div className="title">{this.props.book.best_book.title}</div>
          <div>{this.props.book.best_book.author.name}</div>
          <div>Rating: {this.props.book.average_rating}</div>
        </div>
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
