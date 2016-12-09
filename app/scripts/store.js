import React from 'react';
import Clubs from './collections/clubs';
import Books from './collections/books';
import User from './models/user';
import Users from './collections/users';

export default {
  users: new Users(),
  session: new User(),
  clubs: new Clubs(),
  books: new Books(),
};
