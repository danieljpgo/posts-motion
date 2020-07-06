import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../common/layout/Navigation';
import Home from '../modules/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Navigation>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </Navigation>
  </BrowserRouter>
);

export default Routes;
