import React, { Component } from 'react';

import Button from '../components/button';
import TopBar from '../components/top-bar';
import PageHeader from '../components/page-header';

export default class Home extends Component {
  render() {
    return (
      <div className='container-background'>

        <TopBar active={this.props.location.pathname} />

        <PageHeader text='Hello' />

        <Button
          text='GALLERY'
          onClick={() => console.log('Hello')} />

      </div>
    );
  }
}
