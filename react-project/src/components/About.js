import React, { Component } from 'react';

import {Redirect} from 'react-router-dom'

class About extends Component {
  render() {
    console.log(this.props.location)
    let {search} = this.props.location
    let params = new URLSearchParams(search)
    console.log(params, params.get('a'))
    return (
      <div>
        关于我们
        {/* <Redirect to="/course"></Redirect> */}
      </div>
    );
  }
}

export default About;