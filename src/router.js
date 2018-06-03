import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home  from './containers/home.js';
import About from './containers/about.js';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/*' render={() => <Redirect to='/'/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
