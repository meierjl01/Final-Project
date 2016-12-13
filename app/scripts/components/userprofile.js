import React from 'react';
import { browserHistory } from 'react-router';
import store from '../store';

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

    // console.log(this.props.id);
  let pic;
  let info;
  let addPic;

  if(this.props.user.pic) {
    pic = this.props.user.pic
  } else {
    pic = '../../assets/images/nopic.png'
  }

  if(this.state.owned === true && this.state.editing === false) {
    if(!this.props.user.pic) {
      addPic = (
        <div>
          <input className="add-pic" onClick={this.handleAddPic} type="submit" value="Add a Picture" />
        </div>
     )
    }
    if(this.props.user.bio) {
      info = (
        <div>
          <div>Bio: </div>
          <div className="bio">{this.props.user.bio}</div>
          <div>Favorite Books: </div>
          <div className="bio">{this.props.user.fave}</div>
          <input className="edit-bio" onClick={this.handleEditBio} type="submit" value="Edit Your Profile" />
        </div>
      );
    } else {
      info = (
        <form onSubmit={this.handleAddBio}>
          <textarea ref="bio" placeholder="Write Your Bio" />
          <textarea ref="book" placeholder="Your favorite book(s)" />
          <div>
            <input className="profile-save" type="submit" value="Save"/>
          </div>
        </form>
      );
    }
  } else if(this.state.owned === false) {
    if(this.state.user.bio) {
      info = (
        <span>
          <div>Bio: {this.props.user.bio}</div>
          <div>Favorite Books: {this.props.user.fave}</div>
        </span>
      );
    }
  } else if(this.state.editing === true) {
    info = (
      <form className="edit-bio-form" onSubmit={this.handleBioSave}>
        <div>Edit Your Profile: </div>
        <div>Bio: </div>
        <div><textarea ref="bio" defaultValue={this.props.user.bio} /></div>
        <div>Favorite Books: </div>
        <div><textarea ref="fave" defaultValue={this.props.user.fave} /></div>
        <input className="profile-save" type="submit" value="Save" />
      </form>
    )
  }
  return (
    <div>
      <div>
        <img src={pic} />
      </div>
      <div>
        {addPic}
      </div>
      <div>
        {info}
      </div>
    </div>
  )
  },
  handleBioSave(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let fave = this.refs.fave.value;
    store.users.get(this.props.id).editProfile({bio, fave});
    this.setState({editing: false})
  },
  handleEditBio() {
    this.setState({editing: true})
  },
  handleAddBio(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let fave = this.refs.book.value;
    let id = store.users.get(this.props.id);
    store.users.get(this.props.id).addProfile({bio, fave, id});
    this.setState({editing: false});
  },
  handleAddPic() {
    browserHistory.push('/user/images/'+this.props.id)
  },
});
