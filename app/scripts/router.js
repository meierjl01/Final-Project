import React from 'react';

import { Route, Router, browserHistory } from 'react-router';

import session from './store';
import App from './components/containers/app';
import Search from './components/containers/search';
import Clubs from './components/clubs';
import NewClub from './components/newclub';
import Login from './components/login';
import Register from './components/register';
import ClubHome from './components/containers/clubhome';

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/clubs" component={Clubs} />
      <Route path="/search" component={Search} />
      <Route path="/clubs/new" component={NewClub} />
      <Route path="/clubs/:name" component={ClubHome} />
    </Route>
  </Router>
);

export default router;
