import React, { Fragment } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.module.less';
import logo from '../assets/logo.gif';

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 爱上门出品
  </Fragment>
);

class UserLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ant Design Pro';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ant Design Pro`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>爱上门</span>
              </Link>
            </div>
            <div className={styles.desc}>爱上门简述</div>
          </div>
          {children}
        </div>
        <GlobalFooter copyright={copyright} />
      </div>
    );
  }
}

export default UserLayout;
