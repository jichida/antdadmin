import React, { PureComponent } from 'react';
import styles from './index.module.less';
import RightContent from './RightContent';
import logo from '../../assets/logo.gif';

export default class GlobalHeader extends PureComponent {

    render() {
    const { collapsed } = this.props;
    return (
      <div className={styles.header}>
        <img
            className={styles.trigger}
            style={{fontSize:"36", paddingLeft: "24px", cursor: "pointer"}}
            src={logo} alt="logo" height="50" 
        />
        <RightContent {...this.props} />
      </div>
    );
  }
}
