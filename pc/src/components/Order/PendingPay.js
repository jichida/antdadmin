import React, { PureComponent } from 'react';
import { Card } from 'antd';
import OrderList from './orderlist';
// import { Link } from 'react-router-dom';
import { Button } from 'antd';
import FilterForm from './FilterForm';

class PendingPay extends PureComponent {
  state = {
    query:{}
  };

  handleSearch = (values)=> {
    this.setState({
      query: values,
    })
  }

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
      <React.Fragment>
        <Card style={{marginBottom: 10, marginTop: -16}}><FilterForm onSearch={this.handleSearch} /></Card>
        <OrderList query={this.state.query} opcol={opcol}/>
      </React.Fragment>
    );
  }
}
export default PendingPay;
