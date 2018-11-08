import React, { PureComponent } from 'react';
import styles from './GridContent.module.less';

class GridContent extends PureComponent {
  render() {
    const { children } = this.props;
    let className = `${styles.main}`;
    return <div className={className}>{children}</div>;
  }
}

export default GridContent;
