import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.clubId);
    return (
      <li>
        <span>{this.props.book.best_book.title}</span>
        <span>Rating: {this.props.book.average_rating}</span>
        <img src={this.props.book.best_book.image_url} />
        <span>{this.props.book.best_book.author.name}</span>
        <input type="button" onClick={this.handleAdd} value="Add Book to Future Reads"/>
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
  }
});
