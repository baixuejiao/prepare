import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './views/Home'
import Banner from './views/Banner'

class IRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/" component = {Home} />
        <Route path="/banner" component = {Banner} />
      </div>
    );
  }
}

export default IRouter;