import React from 'react';
import store from '../store';
import SearchList from './searchlist';

export default React.createClass ({
  getInitialState() {
    return {
      books: store.books.toJSON()
    }
  },
  componentWillMount() {
    store.books.reset()
  },
  //clear out collection on will mount for search to clear search results -- backbone collection method that empties
  componentDidMount() {
    store.books.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.books.off('update change', this.replaceState);
  },
  render() {
    console.log(this.state.books);
    return (
      <div>
      <form onSubmit={this.handleSearch} className="search-div">
        <input ref="title" className="book-search" type="text" placeholder="search for a book"/>
        <input className="search" type="submit" value="Search" />
      </form>
        <SearchList books={this.state.books}/>
      </div>
    )
  },
  handleSearch(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    store.books.getBooks(title);
  },
  updateState() {
    this.setState({books: store.books.toJSON()})
  },
  replaceState() {
    this.replaceState({books: })
  }
});
