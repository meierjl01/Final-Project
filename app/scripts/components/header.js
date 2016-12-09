import React from 'react';
import Nav from './nav';

export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <header>
        <h1>Book Buzz</h1>
        <Nav />
      </header>
    )
  }
});
