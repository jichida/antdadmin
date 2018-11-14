import React, { PureComponent } from 'react';
import OrderList from './orderlist';

class PendingPay extends PureComponent {
  state = {
    query:{}
  };


  render() {

    return (
        <OrderList query={this.state.query} />
    );
  }
}
export default PendingPay;
