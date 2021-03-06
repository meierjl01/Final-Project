import React from 'react';
import store from '../../store';
import { browserHistory } from 'react-router';

export default React.createClass({
  render() {
    return(
      <form className="create-club" onSubmit={this.handleCreate}>
      <h2>Create A New Club</h2>
        <div>
          <input type="text" ref="name" placeholder="Club Name" />
        </div>
        <div>
        <textarea ref="description" placeholder="Club Description" />
        </div>
        <div>
          <input type="submit" id="create-club" value="Create" />
        </div>
      </form>
    )
  },
  handleCreate(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    store.clubs.create({name, description});
    browserHistory.push("/clubs");
  }
});
