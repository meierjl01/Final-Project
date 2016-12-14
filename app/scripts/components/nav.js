import React from 'react';
import { Link } from 'react-router';
import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      authenticated: store.session.get('authenticated')
    }
  },
  componentWillMount() {
    store.session.on('change', () => {
      this.setState({
        authenticated: store.session.get('authenticated')
      });
    });
  },
  render() {
    let nav =
      <nav className="logged-out">
        <Link to = "/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Log In</Link>
        <Link to = "/register"> <i className="fa fa-user-plus" aria-hidden="true"></i> Register</Link>
      </nav>;
    if(this.state.authenticated) {
      nav = (
        <nav className="logged-in">
          <Link to = "/clubs"><i className="fa fa-home" aria-hidden="true"></i>   Home</Link>
          <Link to = {`/user/${window.localStorage.getItem('ownerId')}`}><i className="fa fa-user-circle" aria-hidden="true"></i> My Profile</Link>
          <Link to = "/clubs/new"><i className="fa fa-book" aria-hidden="true"></i> Create A Club</Link>
          <button className="logout" onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</button>
        </nav>
      )
    };
    return (
      <div className="nav">
        {nav}
      </div>
    )
  },
  handleLogout(e) {
    e.preventDefault();
    store.session.logout();
  }
});
