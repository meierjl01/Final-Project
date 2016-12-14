import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props);
    return (
        <li>
        <img className="book-pic" alt="book's cover image" src={this.props.Future.image} />
        <span className="book-info">
          <div className="title">{this.props.Future.title}</div>
          <div>By: {this.props.Future.author}</div>
          <div>Rating: {this.props.Future.rating}</div>
        </span>
          <div>
            <input className="add-current" type="submit" onClick={this.handleCurrent} value="Add to Current"/>
          </div>
        </li>
    )
  },
  handleCurrent(e) {
    e.preventDefault();
    let objectId = this.props.Future.objectId;
    // console.log(this.props.Current[0]);
    store.clubs.get(this.props.clubId).addToCurrent(objectId);
  }
});
