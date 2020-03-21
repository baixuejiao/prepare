import React, { Component } from 'react';

class Details extends Component {
  constructor(params) {
    super(params) 

    this.state = {
      details: {}
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(respones => {
        return respones.json()
      })
      .then(res => {
        console.log(res)
        this.setState({
          details: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log(nextprops, nextstate)
    return nextprops.match.params.id != this.props.match.params.id || nextstate.details.id != this.state.details.id
  }

  componentDidUpdate() {
    console.log(this.props.match.params.id)
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(respones => {
        return respones.json()
      })
      .then(res => {
        console.log(res)
        this.setState({
          details: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <h1>课程详情</h1>
        <p>课程ID： {this.state.details.id}</p>
        <p>课程名称： {this.state.details.title}</p>
        <p>教师名称： {this.state.details.teacher}</p>
        <p>课程介绍： {this.state.details.intro}</p>
      </div>
    );
  }
}

export default Details;