import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Create from './Create'
import List from './List'

class User extends Component {
  render() {
    let { path } = this.props.match

    return (
      <div>
        <h1>用户管理</h1>

        <Link to={`${path}/create`}>轮播图信息</Link> | 
        <Link to={`${path}/list`}>用户管理</Link>
        
        <Route path={`${path}/create`} component={Create}/>
        <Route path={`${path}/list`} component={List}/>
      </div>
    );
  }
}

export default User;