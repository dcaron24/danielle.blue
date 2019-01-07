import React from 'react';

import Button from '../button';

import './index.css';

const HomePageContent = (props) => {
  return(
    <div className='home-page-content'>

      <div className='home-page-text'>
        {'Hello blah blah blah'}
        {/* <span>dfgdfgdfg</span> */}
      </div>
      <Button
        text='Gallery'
        onClick={() => console.log('Hello')} />
    </div>
  )
}

export default HomePageContent;
