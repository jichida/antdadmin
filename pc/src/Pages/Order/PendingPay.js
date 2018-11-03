import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';
import StandardTable from '@/components/StandardTable';

import styles from './TableList.less';

class PendingPay extends PureComponent {
  state = {
  };

  columns = [
    {
      title: '商品',
      dataIndex: 'time',
      render: ({avatar, name, description}) => (
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={"This is the description"}
            />
        </Card>
      ),
    },
    {
      title: '订单号',
      dataIndex: 'type',
    },
    {
      title: '买家',
      dataIndex: 'remarks',
      render: ({name, phone}) => (
          <div>
              <span>{name}</span><br /><span>{phone}</span>
          </div>
      )
    },
    {
      title: '数量',
      dataIndex: 'cost',
    },
    {
      title: '创建时间',
      dataIndex: 'balance',
    },
    {
        title: '实付金额',
        dataIndex: 'balance',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary">提醒付款</Button>
          </span>
        ),
      },
  ];

  componentDidMount() {
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

  };

  render() {
    const {
      rule: { data },
      loading,
    } = this.props;

    return (
          <div className={styles.tableList}>
            <StandardTable
              loading={loading}
              data={data}
              columns={this.columns}
              onChange={this.handleStandardTableChange}
            />
          </div>
    );
  }
}

export default PendingPay;
