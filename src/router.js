import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home  from './containers/home.js';
import Gallery from './containers/gallery.js';
import Contact from './containers/contact.js';
import TopBar from './components/top-bar';
import Footer from './components/footer';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <TopBar>
            <Route path='/' exact component={Home} />
            <Route path='/gallery' exact component={Gallery} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/*' render={() => <Redirect to='/'/>} />
          </TopBar>
        </Switch>
      </BrowserRouter>
    );
  }
}
