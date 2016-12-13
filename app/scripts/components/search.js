import React from 'react';
import store from '../store';
import SearchList from './searchlist';

export default React.createClass ({
  getInitialState() {
    return {
      books: store.books.toJSON()
    }
  },
  componentDidMount() {
    store.books.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.books.off('update change', this.updateState);
  },
  render() {
    // console.log(this.props.club);
    return (
      <div>
      <form onSubmit={this.handleSearch} className="search-div">
        <div>Search below for books you want this club to read</div>
        <input ref="title" className="book-search" type="text" placeholder="Book Title"/>
        <input className="search" type="submit" value="Search" />
      </form>
        <SearchList club={this.props.club} clubId={this.props.clubId} books={this.state.books}/>
      </div>
    )
  },
  handleSearch(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    store.books.getBooks(title);
    this.refs.title.value = "";
  },
  updateState() {
    this.setState({books: store.books.toJSON()})
  }
});
