import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props);
    return (
        <li>
          <div>{this.props.Future.title}</div>
          <div>By: {this.props.Future.author}</div>
          <img src={this.props.Future.image} />
          <div>Rating: {this.props.Future.rating}</div>
          <div className="add-current">
            <input type="submit" onClick={this.handleCurrent} value="Add to Current"/>
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
