import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props);
    return (
        <li>
          <span>{this.props.Future.title}</span>
          <span>Rating: {this.props.Future.rating}</span>
          <img src={this.props.Future.image} />
          <span>{this.props.Future.author}</span>
          <input type="submit" onClick={this.handleCurrent} value="Add to Current"/>
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
