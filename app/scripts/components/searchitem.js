import React from 'react';

export default React.createClass({
  render() {

    console.log(this.props.book.best_book);
    return (
      <li>
        <span>{this.props.book.best_book.title}</span>
        <img src={this.props.book.best_book.image_url} />
        <span>{this.props.book.best_book.author.name}</span>
        <input type="button" onClick={this.handleAdd} value="Add Book to Future Reads"/>
      </li>
    )
  },
  handleAdd(e) {
    e.preventDefault();
  }
});
