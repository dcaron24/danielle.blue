import React, { Component } from 'react';
import moment from 'moment';
// imported libraries

import PageHeader from '../components/page-header';
import ImageBox from '../components/image-box';

import galleryImages from '../gallery-images.js';
// imported files
// .. goes back a folder

galleryImages.sort((a, b) => {
  const A = moment(a.date)
  const B = moment(b.date)
  if (A < B) {
    return 1
  } else if (B < A) {
    return -1
  } else {
    return 0
  }
});

export default class Gallery extends Component {
  render() {
    // print out something with console.log,
    // such as this component's properites
    // always take out logs because they get uploaded
    // console.log(this.props.location.pathname);
    return (
      // html begins here, it is mixed with javascript
      <div className='container-background'>
        <PageHeader text='Gallery' />

        <div className='gallery-content'>
          {galleryImages.map(imageObject => {
            return (
              <ImageBox
                name={imageObject.title}
                image={imageObject.imageUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
