import React, { Component } from 'react';
// imported libraries

import TopBar from '../components/top-bar';
import PageHeader from '../components/page-header';
import ImageBox from '../components/image-box';

import galleryImages from '../gallery-images.js';
// imported files
// .. goes back a folder

export default class Gallery extends Component {
  render() {
    // print out something with console.log,
    // such as this component's properites
    // always take out logs because they get uploaded
    // console.log(this.props.location.pathname);
    return (
      // html begins here, it is mixed with javascript
      <div className='container-background'>
        {/* active is a custom property, it is made up */}
        <TopBar active={this.props.location.pathname} />
        {/* brackets mean variables */}
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
