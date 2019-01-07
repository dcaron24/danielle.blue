import React, { Component } from 'react';
// imported libraries

import TopBar from '../components/top-bar';
import PageHeader from '../components/page-header';
import ImageBox from '../components/image-box';
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
        <PageHeader text='danielle.blue coming soon...' />

        <div className='gallery-content'>
          <ImageBox image='https://yt3.ggpht.com/a-/ACSszfFE3ueNAPUAV9ybUfRL0pE9e05zQ05e9y2c1A=s900-mo-c-c0xffffffff-rj-k-no'/>
          <ImageBox image='https://i.ytimg.com/vi/qsxcVsFDDoA/maxresdefault.jpg'/>
          <ImageBox image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/BackSmithGrind.jpg/220px-BackSmithGrind.jpg'/>
          <ImageBox image='https://yt3.ggpht.com/a-/ACSszfFE3ueNAPUAV9ybUfRL0pE9e05zQ05e9y2c1A=s900-mo-c-c0xffffffff-rj-k-no'/>
          <ImageBox image='https://i.ytimg.com/vi/qsxcVsFDDoA/maxresdefault.jpg'/>
          <ImageBox image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/BackSmithGrind.jpg/220px-BackSmithGrind.jpg'/>
        </div>
      </div>
    );
  }
}
