import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import styles from './index.module.less';
import { Link, withRouter } from "react-router-dom";
import logo from '../../assets/logo.gif';

const SubMenu = Menu.SubMenu;

class SideMenu extends PureComponent {

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    let menuSelectKey = '';
    if(pathList[pathList.length - 2]==='account'){
      menuSelectKey = ['account'];
    }
    else{
      menuSelectKey = [pathList[pathList.length - 1]];
    }


    return (
      <div style={{height: "calc(100vh)"}}>
        <div className={styles.logo} id="logo" style={{textAlign: "center"}}>
          <Link to="/">
            <img src={logo} alt="logo" height="50" />
            <h3 style={{color: "white", display: "inline-block", paddingLeft: 5, marginBottom: 0}}><b>爱上门</b></h3>
          </Link>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={menuSelectKey}
          defaultOpenKeys={['index', 'product','order']}
        >
          <SubMenu key="index" title={<span><Icon type="user" /><span>个人页</span></span>}>
            <Menu.Item key="account"><Link to='/'>我的信息</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="product" title={<span><Icon type="appstore" /><span>产品管理</span></span>}>
            <Menu.Item key="commodity"><Link to='/product/commodity'>商品管理</Link></Menu.Item>
            <Menu.Item key="service"><Link to='/product/service'>服务管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="order" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
            <Menu.Item key="pendingpay"><Link to='/order/pendingpay'>未付款订单</Link></Menu.Item>
            <Menu.Item key="pendingsend"><Link to='/order/pendingsend'>未发货订单</Link></Menu.Item>
            <Menu.Item key="delivered"><Link to='/order/delivered'>已发货订单</Link></Menu.Item>
            <Menu.Item key="completed"><Link to='/order/completed'>已完成订单</Link></Menu.Item>
            <Menu.Item key="refund"><Link to='/order/refund'>退款/退货退款订单</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(SideMenu);
