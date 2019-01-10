import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import UpComingMovie from './UpComingMovie';

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/upcoming" component={UpComingMovie} />
  </Switch>
);
