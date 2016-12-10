import React from 'react';
import Clubs from './collections/clubs';
import Books from './collections/books';
import User from './models/user';
import Users from './collections/users';
import Messages from './collections/messages';
import BookMessages from './collections/bookmessages';

export default {
  users: new Users(),
  user: new User(),
  bookMessages: new BookMessages(),
  messages: new Messages(),
  session: new User(),
  clubs: new Clubs(),
  books: new Books(),
};
