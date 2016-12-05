import React from 'react';
import PastBookMessages from './pastbookmessages';

export default React.createClass({
  render() {
    // console.log(this.props.Past);
    return (
      <li>
        <span>{this.props.Past.title}</span>
        <span>Rating: {this.props.Past.rating}</span>
        <img src={this.props.Past.image} />
        <span>{this.props.Past.author}</span>
        <PastBookMessages Past={this.props.Past}/>
      </li>
    )
  }
});
