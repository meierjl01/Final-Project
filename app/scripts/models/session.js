import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';
import { browserHistory } from 'react-router';

export default Backbone.Model.extend ({
  idAttribute: 'objectId',
  defaults: {
    username: '',
    email: '',
    user-token: '',
    authenticated: false
  },

  validatePassword(password, confirmPW) {
    if (password === confirmPW) return true;
  },

  logout() {
    $.ajax({
      contentType: 'application-json',
      url: 'https://api.backendless.com/v1/users/logout',
      success: () => {
        this.clear();
        window.localStorage.clear();
        browserHistory.push('/');
      }
    });
  },
});
