import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Course extends Component {
  constructor(params){
    super(params)

    this.state = {
      list: []
    }

  }
  componentDidMount() {
    fetch('/data/courseList.json')
      .then(respones => {
        // console.log(respones)
        return respones.json()
      })
      .then( res=> {
        // console.log(res)
        this.setState({
          list: res.data
        })
        // console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // console.log(this.props.match)
    // console.log(this.state.list)
    return (
      <div>
        课程列表

        <ul>
          {
            this.state.list.map(obj => (
              <li key={obj.id}>
                <Link to={`/course/${obj.id}`} key={obj.id}>{obj.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Course;