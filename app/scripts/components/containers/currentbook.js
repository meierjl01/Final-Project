import React from 'react';
import CurrentBookMessages from '../currentbookmessages';
import NewCurrentBookMessage from '../newcurrentbookmessage';
import store from '../../store';

export default React.createClass({
  render() {
      let currentBook = this.props.Current.map((Current, i, arr) => {
        return (
          <div key={i}>
            <img className="book-pic" alt="book's cover image" src={Current.image} />
            <span className="book-info">
              <div>{Current.title}</div>
              <div>By: {Current.author}</div>
              <div>Rating: {Current.rating}</div>
            </span>
            <input className="add-button" type="submit" onClick={this.handleRead} value="Add to Read"/>
          </div>
        )
      })
      return (
      <div className="current-container">
        <h3>Current Book</h3>
        {currentBook}
        <CurrentBookMessages clubId={this.props.clubId} current={this.props.Current[0]}/>
        <NewCurrentBookMessage clubId={this.props.clubId} current={this.props.Current[0]}/>
      </div>
    )
  },
  handleRead(e) {
    e.preventDefault;
    // console.log(this.props.Current[0].objectId);
    let objectId = this.props.Current[0].objectId;
    store.clubs.get(this.props.clubId).addToPast(objectId);
  }
});
