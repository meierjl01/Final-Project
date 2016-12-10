import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
  getInitialState() {
      return {
        owned: false,
        editing: false,
      }
  },
  componentWillMount(){
    if(this.props.id === window.localStorage.getItem('ownerId')) {
      this.setState({owned: true})
    }
  },
  render() {
    // console.log(this.props.user);
  let pic;
  let info;
  let addPic;

  //if it's undefined, div

  if(this.props.user.pic) {
    pic = this.props.user.pic
  } else {
    pic = '../../assets/images/nopic.png'
  }

  if(this.state.owned === true && this.state.editing === false) {
    if(!this.props.user.pic) {
      addPic = <input onClick={this.handleAddPic} type="submit" value="Add a Picture" />
    }
    if(this.props.user.bio) {
      info = (
        <span>
          {this.props.user.bio}
          {this.props.user.fave}
          <input onClick={this.handleEditBio} type="submit" value="Edit Your Profile" />
        </span>
      );
    } else {
      info = (
        <form onSubmit={this.handleAddBio}>
          <textarea ref="bio" placeholder="Write Your Bio" />
          <textarea ref="book" placeholder="Your favorite book(s)" />
          <div>
            <input type="submit" value="Save"/>
          </div>
        </form>
      );
    }
  }
  return (
    <div>
      <img src={pic} />
      {addPic}
      {info}
    </div>
  )
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
    browserHistory.push('/user/images/'+this.props.id)
  },
});
