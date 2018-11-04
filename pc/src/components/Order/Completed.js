import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Avatar,
  Rate,
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
import StandardTable from '../StandardTable';

import styles from './TableList.less';

const list = [{
  commodity:{
    id: '1',
    avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    title: "爱上门血压仪",
    description: "升级加强版；银色；官方标配",
  },
  orderno: '1234456',
  buyer: { 
    name: "嘻嘻",
    phone: '12345678',
  },
  ordernum: '1',
  createtime:'20180101',
  money: '319',
},
{
  commodity:{
    id: '1',
    avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    title: "爱上门血压仪",
    description: "升级加强版；银色；官方标配",
  },
  orderno: '1234456',
  buyer: { 
    name: "嘻嘻",
    phone: '12345678',
  },
  ordernum: '1',
  createtime:'20180101',
  money:'319',
},
{
  commodity:{
    id: '1',
    avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    title: "爱上门血压仪",
    description: "升级加强版；银色；官方标配",
  },
  orderno: '1234456',
  buyer: { 
    name: "嘻嘻",
    phone: '12345678',
  },
  ordernum: '1',
  createtime:'20180101',
  money:'319',
},
{
  commodity:{
    id: '1',
    avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    title: "爱上门血压仪",
    description: "升级加强版；银色；官方标配",
  },
  orderno: '1234456',
  buyer: { 
    name: "嘻嘻",
    phone: '12345678',
  },
  ordernum: '1',
  createtime:'20180101',
  money:'319',
},
{
  commodity:{
    id: '1',
    avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    title: "爱上门血压仪",
    description: "升级加强版；银色；官方标配",
  },
  orderno: '1234456',
  buyer: { 
    name: "嘻嘻",
    phone: '12345678',
  },
  ordernum: '1',
  createtime:'20180101',
  money:'319',
},];

class Completed extends PureComponent {
  state = {
  };

  columns = [
    {
      title: '商品',
      dataIndex: 'commodity',
      render: ({avatar, title, description}) => (
        <Card style={{ width: 300, marginTop: 16 }} loading={false}>
            <Card.Meta
                avatar={<Avatar src={avatar} />}
                title={title}
                description={description}
            />
        </Card>
      ),
    },
    {
      title: '订单号',
      dataIndex: 'orderno',
    },
    {
      title: '买家',
      dataIndex: 'buyer',
      render: ({name, phone}) => (
          <div>
              <span>{name}</span><br /><span>{phone}</span>
          </div>
      )
    },
    {
      title: '数量',
      dataIndex: 'ordernum',
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
    },
    {
        title: '实付金额',
        dataIndex: 'money',
    },
    /*
    {
        title: '评价',
        dataIndex: 'balance',
        render: ({rate, evaluate}) => (
            <div>
                <Rate disabled allowHalf defaultValue={2} /><br />
                <span>{evaluate}</span>
            </div>
        )
    },*/
  ];

  componentDidMount() {
  }

  /*
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
  */

  render() {

    return (
          <div className={styles.tableList}>
            <StandardTable
              loading={false}
              data={list}
              columns={this.columns}
              onChange={this.handleStandardTableChange}
            />
          </div>
    );
  }
}

export default Completed;