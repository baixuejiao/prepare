import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
// import Banner from './Banner'
// import User from './User'


class Nav extends Component {
  constructor(params) {
    super(params)

    this.list = [
      {
        "id": 1,
        "path": "banner",
        "title": "轮播图信息"
      },
      {
        "id": 2,
        "path": "user",
  
        "title": "用户管理",
        "children": [
          {
            "id": 3,
            "path": "create",
            "title": "创建用户"
          },
          {
            "id": 4,
            "path": "list",
            "title": "用户列表"
          }
        ]
      },
      {
        "id": 5,
        "path": "classify",
        "title": "课程分类",
        "children": [
          {
            "id": 6,
            "path": "fe",
            "title": "前端",
            "children": [
              {
                "id": 7,
                "path": "junior",
                "title": "初级",
                "children": [
                  {
                    "id": 8,
                    "path": "html",
                    "title": "html"
                  }
                ]
              },
              {
                "id": 9,
                "path": "middle",
                "title": "中级",
                "children": [
                  {
                    "id": 10,
                    "path": "react",
                    "title": "react"
                  }
                ]
              }
            ]
          },
          {
            "id": 11,
            "path": "rd",
            "title": "后端",
            "children": [
              {
                "id": 12,
                "path": "java",
                "title": "java"
              },
              {
                "id": 13,
                "path": "python",
                "title": "python"
              }
            ]
          }
        ]
      }
    ]
  }
  render() {
    console.log(this.props)
    let { path } = this.props.match
    let data = this.props.data || this.list

    return (
      <div>
        <h1>导航菜单</h1>

        {
          data.map(obj => (
            obj.children ? (
              <Link to={`${path}/${obj.path}`} key={obj.id}>{obj.title}</Link> 
            ) : (
              <span key={obj.id}>{obj.title}</span>
            )
          ))
        }

        {
          data.map(obj => (
            // <Route path={`${path}/${obj.path}`} key={obj.id} component={Nav}/>
            <Route path={`${path}/${obj.path}`} key={obj.id} render={(props) => (
              <Nav data={obj.children} {...props}/>
            )} />
          ))
        }
        

      </div>
    );
  }
}

export default Nav;