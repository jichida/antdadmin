import React, { PureComponent } from 'react';
import OrderList from './orderlist';

class Refund extends PureComponent {
  state = {
    query:{}
  };


  render() {

    return (
        <OrderList query={this.state.query} />
    );
  }
}
export default Refund;
