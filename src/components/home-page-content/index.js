import React from 'react';

import Button from '../button';

import './index.css';

const HomePageContent = (props) => {
  return(
    <div className='home-page-content'>
      <Button
        text='Gallery'
        onClick={() => console.log('Hello')} />
    </div>
  )
}

export default HomePageContent;
