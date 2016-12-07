import React from 'react';
import store from '../../store';
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
    // console.log(this.state.club.Messages);
    let childrenWithProps = React.Children.map(this.props.children, (child, i, arr) => {
      return React.cloneElement(child, {
        clubId: this.state.club.objectId,
        Messages: this.state.club.Messages,
        Future: this.state.club.Future || [],
        Current: this.state.club.Current || [],
        Past: this.state.club.Past || [],
      })
    })
    return(
      <div className="club-home">
        <div className="heading">
          <h2>{this.props.params.name}</h2>
          <span>{this.state.club.description}</span>
        </div>
        <Search club={this.state.club} clubId={this.state.club.objectId}/>
        <nav className="home-nav">
        <Link to = {`/clubs/${this.props.params.name}/currentbook`}>Current Book</Link>
        <Link to = {`/clubs/${this.props.params.name}/pastbooks`}>Past Books</Link>
        <Link to = {`/clubs/${this.props.params.name}/futurebooks`}>Future Books</Link>
        <Link to = {`/clubs/${this.props.params.name}/messages`}>Club Messages</Link>
        </nav>
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
