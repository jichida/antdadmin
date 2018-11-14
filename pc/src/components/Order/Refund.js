import React, { PureComponent } from 'react';
import OrderList from './orderlist';
import { Button ,Divider} from 'antd';
class Refund extends PureComponent {
  state = {
    query:{}
  };


  render() {
    const opcol = {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button>联系买家</Button>
            <Divider type="vertical" />
            <Button>同意退款</Button>
          </span>

          ),
      };
    return (
        <OrderList query={this.state.query} opcol={opcol}/>
    );
  }
}
export default Refund;
