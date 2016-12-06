import React from 'react';
import CurrentBookMessages from './currentbookmessages';
import NewCurrentBookMessage from './newcurrentbookmessage';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.clubId);
      let currentBook = this.props.Current.map((Current, i, arr) => {
        return (
          <div key={i}>
            {Current.title}
            {Current.rating}
            <img src={Current.image} />
            {Current.author}
            <input type="submit" onClick={this.handleRead} value="Add to Read"/>
          </div>
        )
      })
      return (
      <div>
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
