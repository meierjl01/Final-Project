import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return(
      <form onSubmit={this.handleCreate}>
        <input type="text" ref="name" placeholder="Club Name" />
        <textarea ref="description" placeholder="Club Name" />
        <input type="submit" id="create-club" value="Create a New Club" />
      </form>
    )
  },
  handleCreate(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    store.clubs.create({name, description});
  }
});
