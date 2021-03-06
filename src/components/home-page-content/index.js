import React from 'react';
import { withRouter } from 'react-router';

import Button from '../button';

import './index.css';

const HomePageContent = (props) => {
  return(
    <div className='home-page-content'>

      <div className='home-page-text'>
        {'My name is Danielle Caron.'}
        <br />
        {'I am an engineering student who enjoys art.'}
        <br />
        {'Feel free to take a look at the gallery:)'}
      </div>
      <Button
        text='Gallery'
        onClick={() => props.history.push('/gallery')} />
    </div>
  )
}

export default withRouter(HomePageContent);
