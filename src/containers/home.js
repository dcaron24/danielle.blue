import React, { Component } from 'react';

import HomePageContent from '../components/home-page-content';
import PageHeader from '../components/page-header';

export default class Home extends Component {
  render() {
    return (
      <div className='container-background'>

        <PageHeader text='Welcome' />

        <HomePageContent />

      </div>
    );
  }
}
