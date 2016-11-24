import React from 'react';
import { Link } from 'react-router';
import store '../store';
import Register from './register';

export default React.createClass({
  render() {
    return (
      <form onSubmit={this.handleLogin} className="login-form">
        <input ref="email" type="email" placholder="Email Address" />
        <input ref="password" type="password" placholder="Password" />
        <input ref="login" type="submit" value="Log In" />
        <div>Not a member? <Link to="register">Register Now</Link></div>
      </form>
    )
  },
  handleLogin(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.ref.password.value;
    session.login(email, password);
  }
});
