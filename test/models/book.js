import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Book from '../../app/scripts/models/book';

describe('book model', () => {
  let book;

  beforeEach(() => {
    book = new Book();
  });

  it('should create a Backbone Model', () => {
      expect(book).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(Book).to.be.a('function');
  });

  it('should have an idAttribute of id', () => {
      expect(book).to.have.property('idAttribute');
      expect(book.idAttribute).to.equal('objectId');
  });

});
