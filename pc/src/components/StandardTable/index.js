import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import styles from './index.module.less';

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };


  render() {
    const {
      data,
      rowKey,
      ...rest
    } = this.props;

    //const paginationProps = {
    //  showSizeChanger: true,
    //  showQuickJumper: true,
    //   ...pagination,
    //};

    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={rowKey || 'key'}
          bordered
          rowClassName={styles.whitebg}
          dataSource={data}
          //pagination={paginationProps}
          onChange={this.handleTableChange}
          {...rest}
        />
      </div>
    );
  }
}

export default StandardTable;
