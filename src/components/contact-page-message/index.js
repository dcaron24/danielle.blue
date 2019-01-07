import React from 'react';

import Button from '../button';

import './index.css';

const ContactMessage = (props) => {
  return(
    <div className='contact-page-message'>

      <div className='contact-message'>
        {'So shoot me an email!'}
        <br />
        {"You can also follow me on instagram, if that's your style"}
      {/* YO LINK THE SK8 */}
      </div>
      <Button
        text='Send it!'
        onClick={() => console.log('Hello')} />
    </div>
  )
}

export default ContactMessage;
