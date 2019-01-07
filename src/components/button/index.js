import React from 'react';

import './index.css';

const Button = (props) => {

  if(props.variant === 'border') {
    return(
      <button
        onClick={props.onClick}
        className={'button-border-container ' + props.className ? props.className : ''}>
        { props.text }
      </button>
    );
  }

  return(
    <button
      onClick={props.onClick}
      className={'button-container ' + props.className ? props.className : ''}>
      { props.text }
    </button>
  );
}

export default Button;
