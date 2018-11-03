import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
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

class Refund extends PureComponent {
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
        title: '状态',
        dataIndex: 'balance',
        filters: [{
            text: '待发货',
            value: 'Joe',
          }, {
            text: '已发货',
            value: 'Jim',
          }, {
            text: '已完成',
            value: 'Submenu',
          },],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
              <a href="javascript:;">联系买家</a>
              <Divider type="vertical" />
              <a href="javascript:;">同意退款</a>
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

export default Refund;
