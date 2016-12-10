import React from 'react';

import { Route, Router, browserHistory } from 'react-router';

import store from './store';
import App from './components/containers/app';
import Clubs from './components/clubs';
import NewClub from './components/containers/newclub';
import Login from './components/login';
import Register from './components/register';
import ClubHome from './components/containers/clubhome';
import CurrentBook from './components/containers/currentbook';
import FutureBooks from './components/containers/futurebooks';
import PastBooks from './components/containers/pastbooks';
import ClubMessages from './components/clubmessages';
import ProfilePage from './components/containers/profilepage';
import ImageUpload from './components/containers/imageupload';

//onChange takes prevState, nextState, replace, callback

function onChange(prevState, nextState, replace) {
  store.books.reset();
  store.books.trigger('update');
};

const router = (
  <Router history = {browserHistory}>
    <Route onChange={onChange} path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/clubs" component={Clubs} />
      <Route path="/clubs/new" component={NewClub} />
      <Route path="/user/:id" component={ProfilePage} />
      <Route path="/user/images/:id" component={ImageUpload} />
      <Route path="/clubs/:name" component={ClubHome}>
        <Route path="/clubs/:name/messages" component={ClubMessages} />
        <Route path="/clubs/:name/currentbook" component={CurrentBook} />
        <Route path="/clubs/:name/futurebooks" component={FutureBooks} />
        <Route path="/clubs/:name/pastbooks" component={PastBooks} />
      </Route>
    </Route>
  </Router>
);

export default router;
