import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import styles from './index.module.less';
import { Link, withRouter } from "react-router-dom";
import logo from '../../assets/logo.gif';

const SubMenu = Menu.SubMenu;

class SideMenu extends PureComponent {

  render() {
    return (
      <div style={{height: "calc(100vh)"}}>
        <div className={styles.logo} id="logo" style={{textAlign: "center"}}>
          <Link to="/">
            <img src={logo} alt="logo" height="60" />
            <h3 style={{color: "white", display: "inline-block", paddingLeft: 5, marginBottom: 0}}><b>爱上门</b></h3>
          </Link>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['index', 'product','order']}
        >
          <SubMenu key="index" title={<span><Icon type="user" /><span>个人页</span></span>}>
            <Menu.Item key="1"><Link to='/'>我的信息</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="product" title={<span><Icon type="appstore" /><span>产品管理</span></span>}>
            <Menu.Item key="2"><Link to='/product/commodity'>商品管理</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/product/service'>服务管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="order" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
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

export default withRouter(SideMenu);
