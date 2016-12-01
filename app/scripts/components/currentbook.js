import React from 'react';
import CurrentBookMessages from './currentbookmessages';
import NewCurrentBookMessage from './newcurrentbookmessage';

export default React.createClass({
  render() {
    console.log(this.props.current);
      let currentBook = this.props.current.map((current, i, arr) => {
        return (
          <div key={i}>
            {current.title}
            {current.rating}
            <img src={current.image} />
            {current.author}
            <input type="submit" onClick={this.handleRead} value="Add to Read"/>
          </div>
        )
      })
      return (
      <div>
        <h3>Current Book</h3>
        {currentBook}
        <CurrentBookMessages />
        <NewCurrentBookMessage />
      </div>
    )
  },
  handleRead(e) {
    e.preventDefault;
    let title = this.props.future.title;
    let rating = this.props.future.rating;
    let image = this.props.future.image;
    let author = this.props.future.author;
    console.log(title, rating, image, author);
    // store.clubs.get(this.props.clubId).addToRead({title, rating, image, author});
  }
});
