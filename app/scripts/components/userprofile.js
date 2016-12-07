import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      user: {},
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
    //fetch messages -- club and book
    store.user.on('update change', this.updateState);
    store.clubs.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.clubs.off('update chagne', this.updateState);
    store.user.off('update change', this.updateState);
  },
  render() {
    let pic;
    let bio;
    let addPic;

    if(this.state.user.pic) {
      pic = this.state.user.pic;
    } else {
      pic = '../../assets/images/nopic.png'
    }

    if(this.state.owned === true && this.state.editing === false) {
      if(!this.state.user.pic) {
        addPic = <input onClick={this.handleAddPic} type="submit" value="Add a Picture" />
      }
      if(this.state.user.bio) {
        bio = (
          <span>
            {this.state.user.bio}
            <input onClick={this.handleEditBio} type="submit" value="Edit Your Bio" />
          </span>
        );
      } else {
        bio = (
          <form onSubmit={this.handleAddBio}>
            <textarea ref="bio" placeholder="Write Your Bio" />
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
        {bio}
        <div>User Messages for Club</div>
        <div>User Messages for Books</div>
      </div>
    )
  },
  updateState() {
    this.setState({
      user: store.user.toJSON(),
      clubs: store.clubs.toJSON()
    })
  },
  handleEditBio() {

  },
  handleAddBio() {

  },
  handleAddPic() {

  },
});
