import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './index.less';
import RightContent from './RightContent';

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    // this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  render() {
    const { collapsed } = this.props;
    return (
      <div className={styles.header}>
        <Icon
          //className={styles.trigger}
          style={{fontSize:"36", paddingLeft: "24px", cursor: "pointer"}}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <RightContent {...this.props} />
      </div>
    );
  }
}
