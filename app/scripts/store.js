import React from 'react';
import Clubs from './collections/clubs';
import Books from './collections/books';
import User from './models/user';

export default {
  user: new User(),
  session: new User(),
  clubs: new Clubs(),
  books: new Books(),
};
