import React from 'react';
import Backbone from 'backbone';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Session from '../../app/scripts/models/session';

describe('session model testing', () => {
  let session;

  beforeEach(() => {
    Session.prototype.initialize = () => {

    };
    session = new Session();
  });

  it('should create a Backbone Model', () => {
    expect(session).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
    expect(Session).to.be.a('function');
  });;

  it('should have an attribute id of objectId', () => {
    expect(session).to.have.property('idAttribute');
    expect(session.idAttribute).to.equal('objectId');
  });

  // it('should have a default username value of an empty string', () => {
  //   expect(session.get('username')).to.equal('');
  // });

  it('should have a default email value of an empty string', () => {
    expect(session.get('email')).to.equal('');
  });

  it('should have a default user-token value of an empty string', () =>{
    expect(session.get('user-token')).to.equal('');
  });

  it('should have a default value authenitcated of false', () => {
    expect(session.get('authenticated')).to.equal(false);
  });

  it('should have a validatePassword method', () => {
    expect(session).to.have.property('validatePassword');
    expect(session.validatePassword).to.be.a('function');
  });

  it('should have a register method', () => {
    expect(session).to.have.property('register');
    expect(session.register).to.be.a('function');
  });

//same error as Bring The Bands testing
  // it('should run the login method when I fire the register method', () => {
  //   let spy = sinon.spy(session, 'register');
  //   session.register({
  //     email: 'jen@jen.com',
  //     password: 'jen'
  //   });
  //   expect(spy.callCount).to.equal(1);
  // });

  it('should throw an error if it doesn\'t get an empty string for password and/or email', () => {
    let fn = session.register.bind(session, 1);
    expect(fn).to.throw();
  });

  it('should have a login method', () => {
    expect(session).to.have.property('login');
    expect(session.login).to.be.a('function');
  });

  it('should throw an error if it doesn\'t get a string for password and/or email', () => {
    let fn = session.login.bind(session, 1);
    expect(fn).to.throw();
  });

  it('should have a logout method', () => {
    expect(session).to.have.property('logout');
    expect(session.logout).to.be.a('function');
  });

});
