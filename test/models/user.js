import React from 'react';
import Backbone from 'backbone';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import User from '../../app/scripts/models/user';

describe('user model testing', () => {
  let user;

  beforeEach(() => {
    User.prototype.initialize = () => {

    };
    user = new User();
  });

  it('should create a Backbone Model', () => {
    expect(user).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
    expect(User).to.be.a('function');
  });;

  it('should have an attribute id of objectId', () => {
    expect(user).to.have.property('idAttribute');
    expect(user.idAttribute).to.equal('objectId');
  });

  // it('should have a default username value of an empty string', () => {
  //   expect(user.get('username')).to.equal('');
  // });

  it('should have a default email value of an empty string', () => {
    expect(user.get('email')).to.equal('');
  });

  it('should have a default user-token value of an empty string', () =>{
    expect(user.get('user-token')).to.equal('');
  });

  it('should have a default value authenitcated of false', () => {
    expect(user.get('authenticated')).to.equal(false);
  });

  it('should have a validatePassword method', () => {
    expect(user).to.have.property('validatePassword');
    expect(user.validatePassword).to.be.a('function');
  });

  it('should have a register method', () => {
    expect(user).to.have.property('register');
    expect(user.register).to.be.a('function');
  });

//same error as Bring The Bands testing
  // it('should run the login method when I fire the register method', () => {
  //   let spy = sinon.spy(user, 'register');
  //   user.register({
  //     email: 'jen@jen.com',
  //     password: 'jen'
  //   });
  //   expect(spy.callCount).to.equal(1);
  // });

  it('should throw an error if it doesn\'t get an empty string for password and/or email', () => {
    let fn = user.register.bind(user, 1);
    expect(fn).to.throw();
  });

  it('should have a login method', () => {
    expect(user).to.have.property('login');
    expect(user.login).to.be.a('function');
  });

  it('should throw an error if it doesn\'t get a string for password and/or email', () => {
    let fn = user.login.bind(user, 1);
    expect(fn).to.throw();
  });

  it('should have a logout method', () => {
    expect(user).to.have.property('logout');
    expect(user.logout).to.be.a('function');
  });

  it('should have a addPhoto method', () => {
    expect(user).to.have.property('addPhoto');
    expect(user.addPhoto).to.be.a('function');
  });

});
