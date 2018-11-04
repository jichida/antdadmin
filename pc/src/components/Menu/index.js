import React, { PureComponent } from 'react';
import { Menu, Icon, Button } from 'antd';
import { style } from './index.less';

const SubMenu = Menu.SubMenu;

class SideMenu extends PureComponent {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={style}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>个人页</span></span>}>
            <Menu.Item key="1">我的信息</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>产品管理</span></span>}>
            <Menu.Item key="2">商品管理</Menu.Item>
            <Menu.Item key="3">服务管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
            <Menu.Item key="4">商品订单管理</Menu.Item>
            <Menu.Item key="5">服务订单管理</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;

