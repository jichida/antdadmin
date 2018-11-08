import React from 'react';
import PageHeader from '../PageHeader';
import GridContent from './GridContent';
import styles from './index.module.less';

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

export default PageHeaderWrapper;
