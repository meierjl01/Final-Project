import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Users from '../../app/scripts/collections/users';

describe('users collection', () => {
    let users;

    beforeEach(() => {
        users = new Users();
    });

    it('should create a Backbone Collection', () => {
        expect(users).to.be.an.instanceof(Backbone.Collection);
    });

    });
