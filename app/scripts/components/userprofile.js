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
    let info;
    let addPic;
    // console.log(this.state);

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
        info = (
          <span>
            {this.state.user.bio}
            <input onClick={this.handleEditBio} type="submit" value="Edit Your Bio" />
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
    this.setState({editing: true})
  },
  handleAddBio(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let fave = this.refs.book.value;
    store.user.save({bio, fave});
    this.setState({editing: false});
  },
  handleAddPic() {
    browserHistory.push('user/images/'+this.props.params.id)
  },
});
