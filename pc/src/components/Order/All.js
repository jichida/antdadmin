import React, { PureComponent } from 'react';
import { Card } from 'antd';
import OrderList from './orderlist';
import FilterForm from './FilterForm';

class All extends PureComponent {
  state = {
    query:{}
  };

  handleSearch = (values)=> {
    this.setState({
      query: values,
    })
  }

  render() {

    return (
      <React.Fragment>
        <Card style={{marginBottom: 10, marginTop: -16}}><FilterForm onSearch={this.handleSearch} /></Card>
        <OrderList query={this.state.query} />
      </React.Fragment>
    );
  }
}

export default All;
