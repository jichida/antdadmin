import React, { PureComponent } from 'react';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import styles from './index.module.less';
import { connect } from 'react-redux';
import {logout_request} from '../../actions';

class GlobalHeaderRight extends PureComponent {
  onClickLogout =()=>{
    const {dispatch}= this.props;
    dispatch(logout_request({}));
  }
  render() {
    const {
      onMenuClick,
      theme,
    } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span onClick={()=>{this.onClickLogout();}}>退出登录</span>
          {/* <FormattedMessage id="menu.account.logout" defaultMessage="退出登录" /> */}
        </Menu.Item>
      </Menu>
    );
    let className = `${styles.right}  ${styles.dark}`;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        {/*
        {currentUser.name ? (
        */}
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg"
                alt="avatar"
              />
              {/*<span className={styles.name}>{currentUser.name}</span> */}
            </span>
          </Dropdown>
        {/*}
        ) : (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        )} */}
      </div>
    );
  }
}
GlobalHeaderRight = connect()(GlobalHeaderRight);
export default GlobalHeaderRight;
