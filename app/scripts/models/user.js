import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';
import { browserHistory } from 'react-router';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/users',
    initialize() {
        if (window.localStorage.getItem('user-token')) {
            this.set({
                authenticated: true,
                'user-token': window.localStorage.getItem('user-token')
            });
        }
    },

    idAttribute: 'objectId',

    defaults: {
        email: '',
        'user-token': '',
        authenticated: false,
    },

    validatePassword(password, confirmPW) {
        if (password === confirmPW) return true;
    },

    register(email, password) {
        $.ajax({
            type: 'POST',
            url: 'https://api.backendless.com/v1/users/register',
            contentType: 'application/json',
            data: JSON.stringify({
                email,
                password
            }),
            success: () => {
                this.login(email, password);
            }
        });
    },

    login(email, password) {
        $.ajax({
            type: 'POST',
            url: 'https://api.backendless.com/v1/users/login',
            contentType: 'application/json',
            data: JSON.stringify({
                login: email,
                password
            }),
            success: (response) => {
                this.set({
                    authenticated: true,
                });

                window.localStorage.setItem('user-token', response['user-token']);
                // window.localStorage.setItem('username', reponse.username);
                window.localStorage.setItem('ownerId', response.ownerId);
                window.localStorage.setItem('email', response.email);
                browserHistory.push("/clubs");
            }
        });
    },

    logout() {
        $.ajax({
            contentType: 'application-json',
            url: 'https://api.backendless.com/v1/users/logout',
            success: () => {
                this.clear();
                window.localStorage.clear();
                browserHistory.push("/");
            }
        });
    },
    addPhoto(fileURL) {
      this.save({pic: fileURL}, {type: 'PUT'});
    },

    editProfile({bio, fave}) {
      this.save({bio, fave}), {type: 'PUT'};
    },
    addProfile({bio, fave}) {
      this.save({bio, fave}), {type: 'PUT'};
    },
});
