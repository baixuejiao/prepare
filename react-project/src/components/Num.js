import React, { Component } from 'react';
import { connect } from 'react-redux';

import {AddActionCreator} from '../store'

function mapStateToProps(state) {
  return {
    number: state.num
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      dispatch(AddActionCreator())
    }
  };
}

class Num extends Component {
  render() {
    return (
      <div>
        <p>number: {this.props.number}</p>
        <button onClick={this.props.add}>add</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Num);