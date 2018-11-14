import React, { PureComponent } from 'react';
import OrderList from './orderlist';
import { Link } from 'react-router-dom';

class Delivered extends PureComponent {
  state = {
    query:{}
  };


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
        <OrderList query={this.state.query} opcol={opcol}/>
    );
  }
}

export default Delivered;
