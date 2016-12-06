import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Books from '../../app/scripts/collections/books';

describe('books collection', () => {
    let books;

    beforeEach(() => {
        books = new Books();
    });

    it('should create a Backbone Collection', () => {
        expect(books).to.be.an.instanceof(Backbone.Collection);
    });

    });
