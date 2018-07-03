import React, { Component } from 'react';
// imported libraries

import TopBar from '../components/top-bar';
import PageHeader from '../components/page-header';
// imported files
// .. goes back a folder

export default class Home extends Component {
  render() {
    // print out something with console.log,
    // such as this component's properites
    // always take out logs because they get uploaded
    // console.log(this.props.location.pathname);
    return (
      // html begins here, it is mixed with javascript
      <div className='container-background'>
        {/* active is a custom property, it is made up */}
        <TopBar active={this.props.location.pathname} />
        {/* brackets mean variables */}
        <PageHeader text='danielle.blue coming soon...' />
      </div>
    );
  }
}
