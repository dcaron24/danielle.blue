import React from 'react';

import Button from '../button';

import './index.css';

const ContactMessage = (props) => {
  return(
    <div className='contact-page-message'>

      <div className='contact-message'>
        {"I'm always looking for new projects!"}
        <br />
        {`My email is dcaron24@gmail.com.`}
        <br />
        {"You can also follow me on Instagram @sk8blossom."}
      </div>

      <Button
        text='Email me'
        onClick={() => window.open('mailto:dcaron24@gmail.com')} />
    </div>
  )
}

export default ContactMessage;
