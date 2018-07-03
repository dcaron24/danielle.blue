import React, { Component } from 'react';

import './index.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className='top-bar-container'>
        <div
          onClick={() => window.location.replace('/')}
          className={`top-bar-text ${this.props.active === '/' ? 'active' : ''}`}>
          {'Home'}
        </div>
        <div
          onClick={() => window.location.replace('/about')}
          className={`top-bar-text ${this.props.active === '/about' ? 'active' : ''}`}>
          {'About'}
        </div>
      </div>
    );
  }
}
