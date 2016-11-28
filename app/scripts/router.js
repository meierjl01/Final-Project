import React from 'react';

import { Route, Router, browserHistory } from 'react-router';

import session from './store';
import App from './components/containers/app';
import Search from './components/containers/search';
import Home from './components/home';
import NewClub from './components/newclub';
import Login from './components/login';
import Register from './components/register';

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/clubs/new" component={NewClub} />
    </Route>
  </Router>
);

export default router;
