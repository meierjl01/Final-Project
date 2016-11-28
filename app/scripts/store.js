import React from 'react';
import Clubs from './collections/clubs';
import Books from './collections/books';
import Session from './models/session';
import Messages from './collections/messages';

export default {
  session: new Session(),
  clubs: new Clubs(),
  books: new Books(),
  messages: new Messages(),
};
