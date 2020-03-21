import React, { Component } from 'react';

import axios from 'axios'

class Banner extends Component {
  constructor(params) {
    super(params)

    this.state = {
      list: []
    }
  }
  componentDidMount() {
    axios('http://www.qmtech.com/getBannerList')
      .then(res => {
        console.log(res)
      })
      .catch( res => {
        console.log(res)
      })
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Banner;