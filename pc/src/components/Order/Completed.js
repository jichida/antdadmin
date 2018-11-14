import React, { PureComponent } from 'react';
import OrderList from './orderlist';

class Completed extends PureComponent {
  state = {
    query:{}
  };


  render() {

    return (
        <OrderList query={this.state.query} />
    );
  }
}

export default Completed;
