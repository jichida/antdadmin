import React, { PureComponent } from 'react';
import OrderList from './orderlist';
// import { Link } from 'react-router-dom';
import { Button } from 'antd';
class PendingPay extends PureComponent {
  state = {
    query:{}
  };


  render() {
    const opcol = {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
              <Button type="primary">提醒付款</Button>
            </span>
          ),
      };
    return (
        <OrderList query={this.state.query} opcol={opcol}/>
    );
  }
}
export default PendingPay;
