import React from 'react';
import PastBookMessages from './pastbookmessages';

export default React.createClass({
  render() {
    // console.log(this.props.Past);
    return (
      <li>
        <img className="book-pic" alt="book's cover image" src={this.props.Past.image} />
        <span className="book-info">
          <div>{this.props.Past.title}</div>
          <div>{this.props.Past.author}</div>
          <div>Rating: {this.props.Past.rating}</div>
        </span>
        <PastBookMessages Past={this.props.Past}/>
      </li>
    )
  }
});
