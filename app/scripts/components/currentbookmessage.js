import React from 'react';
import store from '../store';
import moment from 'moment';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState() {
    return{
      editing: false,
      owned: false,
    }
  },
  componentDidMount() {
    if (window.localStorage.email === this.props.message.email) {
      this.setState({owned: true})
    }
  },
  render() {
    // console.log(this.props.clubId);
    if(this.state.editing === false && this.state.owned === false) {
      return (
        <li>
          On {moment(this.props.message.created).format('LLLL')},
          <div> <Link className="link" to={`/user/${this.props.message.ownerId}`}>{this.props.message.email}</Link>
          said: </div>"{this.props.message.message}"
        </li>
      );
    } else if (this.state.editing === false && this.state.owned === true) {
      return (
      <li>
        On {moment(this.props.message.created).format('LLLL')},
        <div><Link className="link" to={`/user/${this.props.message.ownerId}`}>{this.props.message.email}</Link> said: </div>
        "{this.props.message.message}"
        <div>
          <input className="edit-delete-buttons" onClick={this.handleEdit} type="button" value="Edit"/>
          <input className="edit-delete-buttons" onClick={this.handleDelete} type="button" value="Delete"/>
        </div>
      </li>
    )
  } else if (this.state.editing === true) {
      return (
      <form onSubmit={this.handleSave}>
        <div>Edit your message:</div>
        <textarea defaultValue={this.props.message.message} ref="note" />
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    )
  }
},
  handleSave(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    // let email = window.localStorage.getItem('email');
    let messageId = this.props.message.objectId;
    store.clubs.get(this.props.clubId).saveEditedBookMessage({message, messageId});
    this.setState({
      editing: false,
    })
  },
  handleEdit(e) {
    e.preventDefault();
    this.setState({
      editing: true,
    });
  },
  handleDelete(e) {
    e.preventDefault();
    // console.log(this.props);
    store.clubs.get(this.props.clubId).deleteBookMessage(this.props.message.objectId);
  },
});
