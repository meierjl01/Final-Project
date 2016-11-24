import React from 'react';
import { Link } from 'react-router';
import store '../store';
import Login from './login';

export default React.createClass({
  render() {
    return (
      <form onSubmit={this.handleRegister} className="register-form">
        <input ref="email" type="email" placholder="Email Address" />
        <input ref="username" type="text" placholder="Username" />
        <input ref="password" type="password" placholder="Password" />
        <input ref="confirmpw" type="password" placholder="Confirm Password" />
        <input ref="register" type="submit" value="Register Now" />
        <div>Already a member? <Link to="login">Log In Now</Link></div>
      </form>
    )
  },
  handleRegister(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let confirmPW = this.refs.confirmpw.value;

    if(store.session.validatePassword(password, confirmPW)) {
      store.session.register(email, username, password);
    } else {
      alert('Sorry, your passwords do not match');
    }
  }
});
