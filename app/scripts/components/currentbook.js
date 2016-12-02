import React from 'react';
import CurrentBookMessages from './currentbookmessages';
import NewCurrentBookMessage from './newcurrentbookmessage';

export default React.createClass({
  render() {
    console.log(this.props.Current);
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
        <CurrentBookMessages />
        <NewCurrentBookMessage />
      </div>
    )
  },
  handleRead(e) {
    e.preventDefault;
    let title = this.props.current.title;
    let rating = this.props.current.rating;
    let image = this.props.current.image;
    let author = this.props.current.author;
    // console.log(title, rating, image, author);
    store.clubs.get(this.props.clubId).addToRead({title, rating, image, author});
  }
});
