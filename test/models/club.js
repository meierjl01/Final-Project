import React from 'react';
import Backbone from 'backbone';

import {
    expect
} from 'chai';
import {
    shallow
} from 'enzyme';
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

    it('should have a default description value of an empty string', () => {
        expect(club.get('description')).to.equal('');
    });

    it('should have a addMessageToBook method', () => {
        expect(club).to.have.property('addMessageToBook');
        expect(club.addMessageToBook).to.be.a('function');
    });

    it('should have a addMessageToClub method', () => {
        expect(club).to.have.property('addMessageToClub');
        expect(club.addMessageToClub).to.be.a('function');
    });

    it('should have a deleteMessage method', () => {
        expect(club).to.have.property('deleteMessage');
        expect(club.deleteMessage).to.be.a('function');
    });

    it('should have a deleteBookMessage method', () => {
        expect(club).to.have.property('deleteBookMessage');
        expect(club.deleteBookMessage).to.be.a('function');
    });

    it('should have a saveEditedBookMessage method', () => {
        expect(club).to.have.property('saveEditedBookMessage');
        expect(club.saveEditedBookMessage).to.be.a('function');
    });

    it('should have a saveEditedClubMessage method', () => {
        expect(club).to.have.property('saveEditedClubMessage');
        expect(club.saveEditedClubMessage).to.be.a('function');
    });

    it('should have a addToFuture method', () => {
        expect(club).to.have.property('addToFuture');
        expect(club.addToFuture).to.be.a('function');
    });

    it('should have a addToCurrent method', () => {
        expect(club).to.have.property('addToCurrent');
        expect(club.addToCurrent).to.be.a('function');
    });

    it('should have a addToPast method', () => {
        expect(club).to.have.property('addToPast');
        expect(club.addToPast).to.be.a('function');
    });
});
