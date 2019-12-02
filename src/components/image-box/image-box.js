import React, { Component } from 'react';

import './index.css';

export default class ImageBox extends Component {
  render() {
    return (
      <div className='image-box-container'>
        <img
          className='image-box-image'
          src={this.props.image}
          alt={this.props.name}
        />
      </div>
    );
  }
}
