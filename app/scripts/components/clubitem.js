import React from 'react';
import { Link } from 'react-router';
import store from '../store';

export default React.createClass({
  render() {

    return (
      <Link to = {`/clubs/${this.props.club.name}`}>{this.props.club.name}</Link>
    )
  }
});
