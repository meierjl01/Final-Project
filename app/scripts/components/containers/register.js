import React from 'react';
import store from '../../store';

export default React.createClass({
  render() {
    return (
      <form onSubmit={this.handleRegister} className="register-form">
        <input ref="email" type="email" placeholder="Email Address" />
        <input ref="password" type="password" placeholder="Password" />
        <input ref="confirmpw" type="password" placeholder="Confirm Password" />
        <div>
          <input className="register" ref="register" type="submit" value="Register Now" />
        </div>
      </form>
    )
  },
  handleRegister(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPW = this.refs.confirmpw.value;

    if(store.session.validatePassword(password, confirmPW)) {
      store.session.register(email, password);
    } else {
      alert('Sorry, your passwords do not match');
    }
  }
});
