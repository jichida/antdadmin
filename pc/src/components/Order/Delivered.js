import React, { PureComponent } from 'react';
import { Card } from 'antd';
import OrderList from './orderlist';
import { Link } from 'react-router-dom';
import FilterForm from './FilterForm';

class Delivered extends PureComponent {
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
               <Link to={`/track/${record.key}`}>快递跟踪</Link>
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

export default Delivered;
