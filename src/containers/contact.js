import React, { Component } from 'react';
// imported libraries

import PageHeader from '../components/page-header';
import ContactMessage from '../components/contact-page-message'

export default class Contact extends Component {
  render() {
    return (
      <div className='container-background'>

        <PageHeader text='Contact' />

        <ContactMessage />

      </div>
    );
  }
}
