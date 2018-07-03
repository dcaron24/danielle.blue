import React, { Component } from 'react';

import TopBar from '../components/top-bar';
import PageHeader from '../components/page-header';

export default class About extends Component {
  render() {
    console.log(this.props.location.pathname);

    return (
      <div className='container-background'>
        <TopBar active={this.props.location.pathname} />
        <PageHeader text='About!!' />
      </div>
    );
  }
}
