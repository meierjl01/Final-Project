import React from 'react';
import store from '../store';
import { browserHistory } from 'react-router';
import User from '../models/user';
import UserClubMessages from './userclubmessages';
import UserBookMessages from './userbookmessages';

export default React.createClass({
  getInitialState() {
    return {
      user: {},
      messages: [],
      owned: false,
      editing: false,
    };
  },
  componentWillMount(){
    if(this.props.params.id === window.localStorage.getItem('ownerId')) {
      this.setState({owned: true})
    }
  },
  componentDidMount() {
    var model = store.users.get(this.props.params.id)
    if(!model) {
      model = new User({objectId: this.props.params.id});
      store.users.add(model)
    }
    model.fetch();
    model.on('update change', this.updateState);

    store.clubs.messages.fetch({data: {where: `ownerId='${this.props.params.id}'`}});
    store.clubs.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.users.off('update change', this.updateState);
    store.clubs.off('update change', this.updateState);
  },
  render() {
    console.log(this.state);

    let pic;
    let info;
    let addPic;

    if(this.state.user.pic) {
      pic = this.state.user.pic
    } else {
      pic = '../../assets/images/nopic.png'
    }

    if(this.state.owned === true && this.state.editing === false) {
      if(!this.state.user.pic) {
        addPic = <input onClick={this.handleAddPic} type="submit" value="Add a Picture" />
      }
      if(this.state.user.bio) {
        info = (
          <span>
            {this.state.user.bio}
            {this.state.user.fave}
            <input onClick={this.handleEditBio} type="submit" value="Edit Your Profile" />
          </span>
        );
      } else {
        info = (
          <form onSubmit={this.handleAddBio}>
            <textarea ref="bio" placeholder="Write Your Bio" />
            <textarea ref="book" placeholder="Your favorite book(s)" />
            <input type="submit" value="Save"/>
          </form>
        );
      }
    }
    return (
      <div className="profile">
        <span>{this.state.user.email}</span>
        <img src={pic} />
        {addPic}
        {info}
        <div>User Messages for Club
          <UserClubMessages id={this.props.params.id}/>
        </div>
        <div>User Messages for Books
          <UserBookMessages id={this.props.params.id}/>
        </div>
      </div>
    )
  },
  updateState() {
    if(store.users.get(this.props.params.id) !== undefined) {
      this.setState({
        user: store.users.get(this.props.params.id).toJSON()
      });
    }
    this.setState({
      messages: store.clubs.toJSON()
    })
  },
  handleEditBio() {
    this.setState({editing: true})
  },
  handleAddBio(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let fave = this.refs.book.value;
    store.users.save({bio, fave});
    this.setState({editing: false});
  },
  handleAddPic() {
    browserHistory.push('/user/images/'+this.props.params.id)
  },
});
