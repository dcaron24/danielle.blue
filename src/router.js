import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home  from './containers/home';
import About from './containers/about';

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
