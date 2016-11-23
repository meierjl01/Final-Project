import React from 'react';
import { Link } from 'react-router';
import Home from './home';
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
        <Link to = "login">Log In</Link>
        <Link to = "register">Register</Link>
      </nav>;
    if(this.state.authenticated) {
      nav = (
        <nav className="logged-in">
          <Link to = "home">Home</Link>
          <input type = "submit" className="logout" onClick={this.handleLogout} value="Log Out"/>
        </nav>
      )
    };
    return (
      <div className="nav">
        {nav}
        <Home />
      </div>
    )
  },
  handleLogout(e) {
    e.preventDefault();
    store.session.logout();
  }
});
