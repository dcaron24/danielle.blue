import React, { Component } from 'react';

import PageHeader from '../components/page-header';

export default class About extends Component {
  render() {
    return (
      <div className='container-background'>
        <PageHeader text='About!!' />
      </div>
    );
  }
}
