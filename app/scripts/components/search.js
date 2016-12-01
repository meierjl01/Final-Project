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
    store.books.reset();
    store.books.trigger('update');
  },
  componentWillUnmount() {
    store.books.off('update change', this.updateState);
  },
  render() {
    // console.log(this.props.clubId);
    return (
      <div>
      <form onSubmit={this.handleSearch} className="search-div">
        <input ref="title" className="book-search" type="text" placeholder="search for a book"/>
        <input className="search" type="submit" value="Search" />
      </form>
        <SearchList clubId={this.props.clubId} books={this.state.books}/>
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
  }
});
