import React from 'react';
import store from '../../store';
import ClubMessages from '../clubmessages';
import Search from '../search';

export default React.createClass({
  getInitialState() {
    return {
      club: {}
    }
  },
  componentDidMount() {
    store.clubs.find(this.props.params);
    store.clubs.on('change update', this.updateState);
    //if undefined, initate that fetch
    if(store.clubs.find(this.props.params) === undefined) {
    store.clubs.fetch(this.props.params)
  } else {
    this.updateState();
  }
  },
  componentWillUnmount(){
    store.clubs.off('update change', this.updateState);
  },
  render() {
    // console.log(store.clubs.find(this.props.params));
    return(
      <div>
        <h2>{this.props.params.name}</h2>
        <span>{this.state.club.description}</span>
        <Search />
        <div>Current Book</div>
        <div>Past Books</div>
        <div>Future Books</div>
          <ClubMessages/>
      </div>
    )
  },
  updateState() {
    //only do this if it finds the model -- if statement
    if(store.clubs.find(this.props.params) !== undefined) {
      this.setState({club: store.clubs.find(this.props.params).toJSON()})
    }
  },
});