import React from 'react';

import { Route, Router, browserHistory } from 'react-router';

import session from './store';
import App from './components/containers/app';

const router = (
  <Router history = {browserHistory}>
    <Route path = "/" component={App}>
    </Route>
  </Router>
);

export default router;
