import React from 'react';
import store from '../store';
import ClubItem from './clubitem';

export default React.createClass({
  getInitialState() {
    return{
      clubs: store.clubs.toJSON()
    }
  },
  componentWillMount() {
    store.clubs.fetch();
  },
  componentDidMount() {
    store.clubs.fetch();
    store.clubs.on('change update', this.updateStatus);
  },
  componentWillUnmount() {
    store.clubs.off('update change', this.updateStatus);
  },
  render() {
    // console.log(store.club);
    let clubslist = store.clubs.map((club, i, arr) => {
      return (
        <ClubItem key={i} club={club.toJSON()}/>
      )
    })
    return (
      <div>
        <h2>App description</h2>
        <ul>{clubslist}</ul>
      </div>
    )
  },
  updateStatus() {
    this.setState({clubs: store.clubs.toJSON()})
  },
});
