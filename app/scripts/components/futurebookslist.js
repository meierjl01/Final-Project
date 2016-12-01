import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props);
    return (
        <li>
          <span>{this.props.future.title}</span>
          <span>Rating: {this.props.future.rating}</span>
          <img src={this.props.future.image} />
          <span>{this.props.future.author}</span>
          <input type="submit" onClick={this.handleCurrent} value="Add to Current"/>
        </li>
    )
  },
  handleCurrent(e) {
    e.preventDefault;
    let title = this.props.future.title;
    let rating = this.props.future.rating;
    let image = this.props.future.image;
    let author = this.props.future.author;
    // console.log(title, rating, image, author);
    store.clubs.get(this.props.clubId).addToCurrent({title, rating, image, author});
  }
});
