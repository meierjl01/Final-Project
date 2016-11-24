import React from 'react';
import store from '../../store';
import SearchList from '../searchlist';

export default React.createClass ({
  render() {
    return (
      <div className="search-div">
        <input className="book-search" type="text" placeholder="search for books here"/>
        <input className="search" type="submit" value="Search" />
      </div>
    )
  }
});
