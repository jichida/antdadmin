import React, { PureComponent } from 'react';
import OrderList from './orderlist';
import { Link } from 'react-router-dom';

class PendingSend extends PureComponent {
  state = {
    query:{}
  };


  render() {
    const opcol = {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
              <Link to="/sendout">立即发货</Link>
            </span>
          ),
      };
    return (
        <OrderList query={this.state.query} opcol={opcol}/>
    );
  }
}
export default PendingSend;
