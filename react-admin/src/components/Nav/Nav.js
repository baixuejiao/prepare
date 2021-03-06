import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu, Icon, Switch } from 'antd';
import menuList from '../../config/menuconfig'
const { SubMenu } = Menu;



class Nav extends Component {
  constructor(params) {
    super(params)
    this.state = {
      list: []
    }
    this.createMenu = this.createMenu.bind(this)
  }
  handleClick = e => {
    console.log('click ', e);
  };

  createMenu(_config) {
    return (
      _config.map(obj => (
        obj.children ? (
          <SubMenu
            key={obj.path}
            title={
              <span>
                <Icon type={obj.icon} />
                <span>{obj.title}</span>
              </span>
            }
          >
            {this.createMenu(obj.children)}
          </SubMenu>
        ) : (
          <Menu.Item key={obj.path}>
            <Link to={obj.path}>
              <Icon type={obj.icon} />
              <span> {obj.title} </span>
            </Link>
          </Menu.Item>
        )
      ))
    )
  }
  componentWillMount() {
    this.setState({
      list: this.createMenu(menuList)
    })
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          // style={{ width: 256 }}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          theme="dark"
          mode="inline"
        >
          {this.state.list}
        </Menu>
        {/* <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu> */}
      </div>
    );
  }
}

export default Nav;