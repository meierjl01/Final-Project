import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Clubs from '../../app/scripts/collections/clubs';

describe('clubs collection', () => {
    let clubs;

    beforeEach(() => {
        clubs = new Clubs();
    });

    it('should create a Backbone Collection', () => {
        expect(clubs).to.be.an.instanceof(Backbone.Collection);
    });

    });
