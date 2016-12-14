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
  componentWillReceiveProps(nextProps) {
    if(nextProps.params.id !== this.props.params.id) {
      this.setState(this.getInitialState());

      store.messages.fetch({data: {where: `ownerId='${nextProps.params.id}'`}});

      store.bookMessages.fetch({data: {where: `ownerId='${nextProps.params.id}'`}});

      store.users.get(this.props.params.id).off('change', this.updateState);

      var model = store.users.get(this.props.params.id)
      if(!model) {
        model = new User({objectId: this.props.params.id});
        store.users.add(model)
      }
      model.fetch();
      model.on('change', this.updateState);
    }
  },
  componentDidMount() {
    var model = store.users.get(this.props.params.id)
    if(!model) {
      model = new User({objectId: this.props.params.id});
      store.users.add(model)
    }
    model.fetch();
    model.on('change', this.updateState);

    store.messages.fetch({data: {where: `ownerId='${this.props.params.id}'`}});
    store.messages.on('update change', this.updateState);

    store.bookMessages.fetch({data: {where: `ownerId='${this.props.params.id}'`}});
    store.bookMessages.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.users.get(this.props.params.id).off('change', this.updateState);
    store.messages.off('update change', this.updateState);
    store.bookMessages.off('update change', this.updateState);
  },
  render() {
    return (
        <div className="profile">
            <h2>{this.state.user.email}</h2>
            <UserProfile id={this.props.params.id} user={this.state.user}/>
            <UserClubMessages user={this.state.user} messages={this.state.messages} id={this.props.params.id}/>
            <UserBookMessages user={this.state.user} id={this.props.params.id} bookMessages={this.state.bookMessages}/>
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
