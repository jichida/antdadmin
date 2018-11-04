import React, { PureComponent } from 'react';
import { Spin, Tag, Menu, Icon, Dropdown, Avatar, Tooltip } from 'antd';
import moment from 'moment';
import styles from './index.less';

export default class GlobalHeaderRight extends PureComponent {

  render() {
    const {
      currentUser,
      onMenuClick,
      theme,
    } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span>退出登录</span>
          {/* <FormattedMessage id="menu.account.logout" defaultMessage="退出登录" /> */}
        </Menu.Item>
      </Menu>
    );
    let className = `${styles.right}  ${styles.dark}`;
    //if (theme === 'dark') {
    //  className = `${styles.right}  ${styles.dark}`;
    //}
    return (
      <div className={className}>
        {/*
        {currentUser.name ? (
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                src={currentUser.avatar}
                alt="avatar"
              />
              <span className={styles.name}>{currentUser.name}</span>
            </span>
          </Dropdown>
        ) : (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        )} */}
        <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
      </div>
    );
  }
}
