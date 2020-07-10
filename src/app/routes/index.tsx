import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from '../common/layout/Navigation';
import Home from '../modules/Home';
import Post from '../modules/Home/Post';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Navigation>
      <Route render={({ location }) => (
        <AnimatePresence
          initial={false}
          exitBeforeEnter
        >
          <Switch
            location={location}
            key={location.pathname}
          >
            <Route
              exact
              path="/"
              component={Home}
              key="/"
            />
            <Route
              exact
              path="/home"
              component={Home}
              key="home"
            />
            <Route
              exact
              path="/post/:id"
              component={Post}
              key="post"
            />
          </Switch>
        </AnimatePresence>
      )}
      />
    </Navigation>
  </BrowserRouter>
);

export default Routes;
