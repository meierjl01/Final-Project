import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import BookMessage from '../../app/scripts/models/bookmessage';

describe('bookmessage model', () => {
  let bookmessage;

  beforeEach(() => {
    bookmessage = new BookMessage();
  });

  it('should create a Backbone Model', () => {
      expect(bookmessage).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(BookMessage).to.be.a('function');
  });

  it('should have an idAttribute of objectId', () => {
      expect(bookmessage).to.have.property('idAttribute');
      expect(bookmessage.idAttribute).to.equal('objectId');
  });

  it('should have a urlRoot', () => {
    expect(bookmessage).to.have.property('urlRoot');
  });

});
