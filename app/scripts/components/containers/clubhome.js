import React from 'react';
import store from '../../store';

export default React.createClass({
  getInitialState() {
    return {
      club: store.clubs.toJSON()
    }
  },
  componentWillMount() {
    store.clubs.fetch();
  },
  componentDidMount() {
    store.clubs.fetch();
    store.clubs.on('change update', this.updateState);
  },
  componentWillUnmount(){
    store.clubs.off('update change', this.updateState);
  },
  render() {
    return(
      <div>
      </div>
    )
  },
  updateState() {
    this.setState({club: store.clubs.toJSON()})
  },
});
