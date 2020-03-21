import React, { Component } from 'react';
import {store, AddActionCreator} from '../store'

class Count extends Component {
  constructor(params) {
    super(params)
    this.state = {
      // 获取store中的state
      number: store.getState().num
    }
    // 订阅 一旦store中的state发生变化就会触发本方法
    store.subscribe(() => {
      this.setState({
        number: store.getState().num
      })
    })
  }
  add() {
    //派发action
    store.dispatch(AddActionCreator())
  }

  render() {
    console.log(store.getState())
    return (
      <div>
        <p>number: {this.state.number}</p>
        <button onClick={this.add.bind(this)}>add+1</button>
      </div>
    );
  }
}

export default Count;