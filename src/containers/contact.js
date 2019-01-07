import React, { Component } from 'react';
// imported libraries

import TopBar from '../components/top-bar';
import PageHeader from '../components/page-header';

export default class Contact extends Component {
  render() {
    return (
      <div className='container-background'>

        <TopBar active={this.props.location.pathname} />

        <PageHeader text='Contact' />

      </div>
    );
  }
}
