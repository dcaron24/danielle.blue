import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import Headroom from 'react-headroom';

import Button from '../button';

import './index.css';

class TopBar extends Component {
  render() {
    return (
      <Fragment>
        <Headroom>
          <div className='top-bar-container'>

            <Button
              smallOnMobile
              text='Home'
              variant='border'
              onClick={() => this.props.history.push('/')}
              className={this.props.active === '/' ? 'active' : ''} />

            <Button
              smallOnMobile
              text='Gallery'
              variant='border'
              onClick={() => this.props.history.push('/gallery')}
              className={this.props.active === '/gallery' ? 'active' : ''}/>

            <Button
              smallOnMobile
              text='Contact'
              variant='border'
              onClick={() => this.props.history.push('/contact')}
              className={this.props.active === '/contact' ? 'active' : ''}/>

          </div>
        </Headroom>

        {this.props.children}
      </Fragment>
    );
  }
}

export default withRouter(TopBar);
