import React from 'react';
import store from '../../store';
import ClubMessages from '../clubmessages';
import Search from '../search';
import { Link } from 'react-router';
import $ from 'jquery';

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
    // console.log(this.state.club.current);
    let childrenWithProps = React.Children.map(this.props.children, (child, i, arr) => {
      return React.cloneElement(child, {
        clubId : this.state.club.objectId,
        future: this.state.club.future || [],
        current: this.state.club.current || [],
      })
    })
    return(
      <div className="club-home">
        <h2>{this.props.params.name}</h2>
        <span>{this.state.club.description}</span>
        <Search clubId={this.state.club.objectId}/>
        <Link to = {`/clubs/${this.props.params.name}/currentbook`}>Current Book</Link>
        <Link to = {`/clubs/${this.props.params.name}/pastbooks`}>Past Books</Link>
        <Link to = {`/clubs/${this.props.params.name}/futurebooks`}>FutureBooks</Link>
        <ClubMessages messages={this.state.club.Messages} clubId={this.state.club.objectId}/>
        {childrenWithProps}
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
