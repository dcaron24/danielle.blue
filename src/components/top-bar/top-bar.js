import React, { Component } from 'react';
import Headroom from 'react-headroom';

import Button from '../button';

import './index.css';

export default class TopBar extends Component {
  render() {
    return (
      <Headroom>
        <div className='top-bar-container'>

          <Button
            text='Home'
            variant='border'
            onClick={() => window.location.replace('/')}
            className={this.props.active === '/' ? 'active' : ''} />

          <Button
            text='Gallery'
            variant='border'
            onClick={() => window.location.replace('/gallery')}
            className={this.props.active === '/gallery' ? 'active' : ''}/>

        </div>
      </Headroom>
    );
  }
}
