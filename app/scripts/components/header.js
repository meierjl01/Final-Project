import React from 'react';
import Nav from './nav';

export default React.createClass({
  render() {
    return (
      <header>
        <h1 className="app-name">Book Buzz</h1>
        <Nav />
      </header>
    )
  }
});
