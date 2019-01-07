import React from 'react';

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
        <br />
        {'For any inquiries, email me @theartofdanielle@gmail.com'}
        <br />
        {'or follow me on instagram @sk8blossom'}
      </div>
      <Button
        text='Gallery'
        onClick={() => console.log('Hello')} />
    </div>
  )
}

export default HomePageContent;
