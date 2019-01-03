import React, { Component } from 'react';

import './index.css';

export default class PageHeader extends Component {
  render() {
    return (
      <span className='page-header-style'>
        {this.props.text}
      </span>
    );
  }
}
// comments
