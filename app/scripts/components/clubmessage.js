import React from 'react';
import $ from 'jquery';
import store from '../store';

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
// console.log(this.props.clubId);
    if(this.state.editing === false && this.state.owned === false) {
      return (
        <li>
          On {new Date(this.props.message.created).toString()}
          {this.props.message.email} said:
          "{this.props.message.body}"
        </li>
      );
    } else if (this.state.editing === false && this.state.owned === true) {
      return (
      <li>
        On {new Date(this.props.message.created).toString()}
        {this.props.message.email} said:
        "{this.props.message.body}"
        <input onClick={this.handleEdit} type="button" value="Edit"/>
        <input onClick={this.handleDelete} type="button" value="Delete"/>
      </li>
    )
  } else if (this.state.editing === true) {
      return (
      <form onSubmit={this.handleSave}>
        <span>Edit your message:</span>
        <textarea placeholder={this.props.message.body} ref="note" />
        <input type="submit" value="Save" />
      </form>
    )
  }

  },
  handleSave(e) {
    e.preventDefault();
    let message = this.refs.note.value;
    let email = window.localStorage.getItem('email');
    store.clubs.get(this.props.message).saveEditedClubMessage({message, email});
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
