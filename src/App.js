import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
);
