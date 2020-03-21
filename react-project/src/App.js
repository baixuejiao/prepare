import React from 'react';
import { Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Course from './components/Course'
import Details from './components/Details'
import Nav from './components/Nav'
import Count from './components/Count'
import Num from './components/Num'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" >首页</Link> | 
        <Link to="/course">课程</Link> | 
        <Link to={{
          pathname:"/about",
          search: '?a=1&b=2',
          hash: '#aaa',
          state: {
            id: 123,
            channel: 888
          },
          query: {
            name: 'xm'
          }
        }}>关于我们</Link> | 
        <Link to="/nav">菜单</Link> | 
        <Link to="/count">redux</Link> | 
        <Link to="/num">react-redux</Link>
      </nav>

      <div>
        <Route path="/" exact component={Home} />
        <Route path="/course" component={Course} />
        <Route path="/course/:id" component={Details} />
        <Route path="/about" component={About} />
        <Route path="/nav" component={Nav} />
        <Route path="/count" component={Count} />
        <Route path="/num" component={Num} />

      </div>

    </div>
  );
}

export default App;
