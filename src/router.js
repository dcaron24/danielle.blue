import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/*' render={() => <Redirect to='/'/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
