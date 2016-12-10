import React from 'react';
import store from '../../store';
import ClubItem from '../clubitem';
import { Link } from 'react-router';

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
      <h2 className="heading">Explore Our Bookclubs:</h2>
      <div className="home">
        <ul>{clubslist}</ul>
        <div className="create-club-link">Dont see a club that interests you?</div>
        <div><Link to ="/clubs/new">Create one!</Link></div>
      </div>
      </div>
    )
  },
  updateStatus() {
    this.setState({clubs: store.clubs.toJSON()})
  },
});
