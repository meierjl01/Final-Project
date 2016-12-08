import React from 'react';
import $ from 'jquery';
import store from '../store';
import { Link } from 'react-router';
import moment from 'moment';

export default React.createClass({
  getInitialState() {
    return {
      editing: false,
      owned: false
    }
  },
  componentDidMount() {
    if (window.localStorage.email === this.props.message.email) {
      this.setState({owned: true})
    }
  },
  render() {
// console.log(this.props.message.ownerId);
    if(this.state.editing === false && this.state.owned === false) {
      return (
        <li>
          <div>On {moment(this.props.message.created).format('LLLL')},</div>
          <div><Link to={`/user/${this.props.message.ownerId}`}>{this.props.message.email}</Link>
          said:</div>
          <div>"{this.props.message.message}"</div>
        </li>
      );
    } else if (this.state.editing === false && this.state.owned === true) {
      return (
      <li>
        <div>On {moment(this.props.message.created).format('LLLL')},</div>
        <div><Link to={`/user/${this.props.message.ownerId}`}>{this.props.message.email} </Link> 
        said: </div>
        <div>"{this.props.message.message}"</div>
        <div>
          <input onClick={this.handleEdit} type="button" value="Edit"/>
          <input onClick={this.handleDelete} type="button" value="Delete"/>
        </div>
      </li>
    )
  } else if (this.state.editing === true) {
      return (
      <form onSubmit={this.handleSave}>
        <span>Edit your message:</span>
        <textarea defaultValue={this.props.message.message} ref="note" />
        <input type="submit" value="Save" />
      </form>
    )
  }

  },
  handleSave(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let email = window.localStorage.getItem('email');
    let objectId = this.props.message.objectId;
    store.clubs.get(this.props.clubId).saveEditedClubMessage({message, email, objectId});
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
    // console.log(this.props.message.objectId);
    store.clubs.get(this.props.clubId).deleteMessage(this.props.message.objectId);
  },
});
