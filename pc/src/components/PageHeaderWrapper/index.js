import React from 'react';
import PageHeader from '../PageHeader';
//import { connect } from 'dva';
import GridContent from './GridContent';
import styles from './index.less';
import MenuContext from '../../layouts/MenuContext';

const PageHeaderWrapper = ({ children, contentWidth, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
        <PageHeader
          wide={contentWidth === 'Fixed'}
          home={<span>Home</span>}
          key="pageheader"
          {...restProps}
          //linkElement={Link}
          itemRender={item => {
            if (item.locale) {
              return <span>{item.name}</span>;
            }
            return item.name;
          }}
        />
    {children ? (
      <div className={styles.content}>
        <GridContent>{children}</GridContent>
      </div>
    ) : null}
  </div>
);

//export default connect(({ setting }) => ({
//  contentWidth: setting.contentWidth,
//}))(PageHeaderWrapper);

export default PageHeaderWrapper;
