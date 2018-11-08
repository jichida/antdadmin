import React, { Component } from 'react';
import PageHeaderWrapper from '../PageHeaderWrapper';
import { withRouter } from 'react-router-dom';

class Index extends Component {
  handleTabChange = key => {
    const { history } = this.props;
    switch (key) {
      case 'pendingpay':
        history.push(`/order/pendingpay`);
        break;
      case 'pendingsend':
        history.push(`/order/pendingsend`);
        break;
      case 'delivered':
        history.push(`/order/delivered`);
        break;
      case 'completed':
        history.push(`/order/completed`);
        break;
      case 'refund':
        history.push(`/order/refund`);
        break;
      default:
        break;
    }
  };

  handleFormSubmit = value => {
    // eslint-disable-next-line
    console.log(value);
  };

  render() {
    const tabList = [
      {
        key: 'pendingpay',
        tab: '待付款',
      },
      {
        key: 'pendingsend',
        tab: '待发货',
      },
      {
        key: 'delivered',
        tab: '已发货',
      },
      {
        key: 'completed',
        tab: '已完成',
      },
      {
        key: 'refund',
        tab: '退款/退货退款',
      },
    ];

    const { match, children, location } = this.props;

    return (
      <PageHeaderWrapper
        title=""
        tabList={tabList}
        tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
        onTabChange={this.handleTabChange}
      >
        {children}
      </PageHeaderWrapper>
    );
  }
}

export default withRouter(Index);
