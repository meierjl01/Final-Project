import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Message from '../../app/scripts/models/message';

describe('message model', () => {
  let message;

  beforeEach(() => {
    message = new Message();
  });

  it('should create a Backbone Model', () => {
      expect(message).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(Message).to.be.a('function');
  });

  it('should have an idAttribute of id', () => {
      expect(message).to.have.property('idAttribute');
      expect(message.idAttribute).to.equal('id');
  });

});
