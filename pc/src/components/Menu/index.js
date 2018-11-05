import React, { PureComponent } from 'react';
import { Menu, Icon, Button } from 'antd';
import styles from './index.less';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

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
      <div>
        <div className={styles.logo} id="logo" style={{textAlign: "center"}}>
          <Link to="/">
            <img src={logo} alt="logo" height="60" />
            <h3 style={{color: "white"}}>爱上门</h3>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>个人页</span></span>}>
            <Menu.Item key="1"><Link to='/'>我的信息</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>产品管理</span></span>}>
            <Menu.Item key="2"><Link to='/product/commodity'>商品管理</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/product/service'>服务管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
            <Menu.Item key="4"><Link to='/order/pendingpay'>未付款订单</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/order/pendingsend'>未发货订单</Link></Menu.Item>
            <Menu.Item key="6"><Link to='/order/delivered'>已发货订单</Link></Menu.Item>
            <Menu.Item key="7"><Link to='/order/completed'>已完成订单</Link></Menu.Item>
            <Menu.Item key="8"><Link to='/order/refund'>退款/退货退款订单</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
