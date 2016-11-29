import React from 'react';

import { Route, Router, browserHistory } from 'react-router';

import session from './store';
import App from './components/containers/app';
import Clubs from './components/clubs';
import NewClub from './components/newclub';
import Login from './components/login';
import Register from './components/register';
import ClubHome from './components/containers/clubhome';
import CurrentBook from './components/currentbook';
import FutureBooks from './components/futurebooks';
import PastBooks from './components/pastbooks';

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/clubs" component={Clubs} />
      <Route path="/clubs/new" component={NewClub} />
      <Route path="/clubs/:name" component={ClubHome} />
      <Route path="/clubs/:name/currentbook" component={CurrentBook} />
      <Route path="/clubs/:name/futurebooks" component={FutureBooks} />
      <Route path="/clubs/:name/pastbooks" component={PastBooks} />
    </Route>
  </Router>
);

export default router;
