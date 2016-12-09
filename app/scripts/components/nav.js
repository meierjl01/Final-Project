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
    console.log(window.localStorage.getItem('ownerId'));

    let nav =
      <nav className="logged-out">
        <div><Link to = "/login">Log In</Link></div>
        <div><Link to = "/register">Register</Link></div>
      </nav>;
    if(this.state.authenticated) {
      nav = (
        <nav className="logged-in">
          <Link to = "/clubs"><i className="fa fa-home" aria-hidden="true"></i>   Home</Link>
          <Link to = {`user/${window.localStorage.getItem('ownerId')}`}>My Profile</Link>
          <Link to = "/clubs/new"><i className="fa fa-book" aria-hidden="true"></i> Create A Club</Link>
          <input type = "submit" className="logout" onClick={this.handleLogout} value="Log Out"/>
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
