import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Club from '../../app/scripts/models/club';

describe('club model', () => {
  let club;

  beforeEach(() => {
    club = new Club();
  });

  it('should create a Backbone Model', () => {
      expect(club).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(Club).to.be.a('function');
  });

  it('should have an idAttribute of objectId', () => {
      expect(club).to.have.property('idAttribute');
      expect(club.idAttribute).to.equal('objectId');
  });

  it('should have a default name value of an empty string', () => {
    expect(club.get('name')).to.equal('');
  });

  it('should have a default description value of an empty string', () =>{
    expect(club.get('description')).to.equal('');
  });

});
