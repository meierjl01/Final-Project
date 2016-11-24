import React from 'react';

import { Route, Router, hashHistory } from 'react-router';

import session from './store';
import App from './components/containers/app';
import Search from './components/containers/search';
import Home from './components/home';
import NewClub from './components/newclub';

const router = (
  <Router history = {hashHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="search" component={Search} />
      <Route path="clubs/new" component={NewClub} />
    </Route>
  </Router>
);

export default router;
