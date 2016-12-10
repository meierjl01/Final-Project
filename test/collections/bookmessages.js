import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import BookMessages from '../../app/scripts/collections/bookmessages';

describe('bookmessages collection', () => {
    let bookmessages;

    beforeEach(() => {
        bookmessages = new BookMessages();
    });

    it('should create a Backbone Collection', () => {
        expect(bookmessages).to.be.an.instanceof(Backbone.Collection);
    });

    });
