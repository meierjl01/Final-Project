import React from 'react';
import store from '../../store';
import User from '../../models/user';
import UserProfile from '../userprofile';
import UserClubMessages from '../userclubmessages';
import UserBookMessages from '../userbookmessages';

export default React.createClass({
  getInitialState() {
    return {
      user: {},
      messages: [],
      bookMessages: [],
    };
  },
  componentDidMount() {
    var model = store.users.get(this.props.params.id)
    if(!model) {
      model = new User({objectId: this.props.params.id});
      store.users.add(model)
    }
    model.fetch();
    model.on('update change', this.updateState);

    store.messages.fetch({data: {where: `ownerId='${this.props.params.id}'`}});
    store.messages.on('update change', this.updateState);

    store.bookMessages.fetch({data: {where: `ownerId='${this.props.params.id}'`}});
    store.bookMessages.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.users.off('update change', this.updateState);
    store.messages.off('update change', this.updateState);
    store.bookMessages.off('update change', this.updateState);
  },
  render() {
    // console.log(this.state.messages);
    return (
        <div className="profile">
            <UserProfile id={this.props.params.id} user={this.state.user}/>
            <UserClubMessages messages={this.state.messages} id={this.props.params.id}/>
            <UserBookMessages id={this.props.params.id} bookMessages={this.state.bookMessages}/>
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
      messages: store.messages.toJSON(),
      bookMessages: store.bookMessages.toJSON(),
    })
  },
});
