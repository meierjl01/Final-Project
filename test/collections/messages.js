import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Messages from '../../app/scripts/collections/messages';

describe('messages collection', () => {
    let messages;

    beforeEach(() => {
        messages = new Messages();
    });

    it('should create a Backbone Collection', () => {
        expect(messages).to.be.an.instanceof(Backbone.Collection);
    });

    });
