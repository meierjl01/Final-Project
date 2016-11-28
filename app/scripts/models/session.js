import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';
import { browserHistory } from 'react-router';

export default Backbone.Model.extend({
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
        username: '',
        email: '',
        'user-token': '',
        authenticated: false,
    },

    validatePassword(password, confirmPW) {
        if (password === confirmPW) return true;
    },

    register(email, username, password) {
        $.ajax({
            type: 'POST',
            url: 'https://api.backendless.com/v1/users/register',
            contentType: 'application/json',
            data: JSON.stringify({
                username,
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
                browserHistory.push("/home");
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
});