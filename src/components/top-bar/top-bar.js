import React, { Component } from 'react';
import Headroom from 'react-headroom';

import './index.css';

export default class TopBar extends Component {
  render() {
    return (
      <Headroom>
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
      </Headroom>
    );
  }
}
