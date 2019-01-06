import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home  from './containers/home.js';
import Gallery from './containers/gallery.js';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/*' render={() => <Redirect to='/'/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
