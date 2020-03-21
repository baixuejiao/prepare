import React from 'react';
import { Row, Col } from 'antd';
import IRouter from './router'
import Nav from './components/Nav/Nav.js'
import Header from './components/Header/Header.js'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Row>
        <Col span={4} className="app-left">
          <Nav />
        </Col>
        <Col span={20}>
          <Header/>
          <IRouter/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
