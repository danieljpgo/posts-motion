import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from '../common/layout/Navigation';
import Home from '../modules/Home';
import Post from '../modules/Home/Post';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Navigation>
      <AnimatePresence
        // initial={false}
        exitBeforeEnter
      >
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/home"
            component={Home}
          />
          <Route
            exact
            path="/post/:id"
            component={Post}
          />
        </Switch>
      </AnimatePresence>
    </Navigation>
  </BrowserRouter>
);

export default Routes;
