import React from 'react';
import store from '../../store';

export default React.createClass({
  render() {
    return (
      <form onSubmit={this.handleLogin} className="login-form">
        <input ref="email" type="email" placeholder="Email Address" />
        <input ref="password" type="password" placeholder="Password" />
        <div>
          <input ref="login" type="submit" value="Log In" />
        </div>
      </form>
    )
  },
  handleLogin(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    store.session.login(email, password);
  }
});
