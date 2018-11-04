import React, { Component } from 'react';
import { Input } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageHeaderWrapper from '../PageHeaderWrapper';
import { withRouter } from 'react-router-dom';

class Index extends Component {
  handleTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'pendingpay':
        Router.push(`${match.url}/pendingpay`);
        break;
      case 'pendingsend':
        Router.push(`${match.url}/pendingsend`);
        break;
      case 'sendout':
        Router.push(`${match.url}/sendout`);
        break;
      case 'completed':
        Router.push(`${match.url}/completed`);
        break;
      case 'refund':
        Router.push(`${match.url}/refund`);
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
        key: 'sendout',
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
        {/* <Switch>
          {routes.map(item => (
            <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
          ))}
        </Switch> */}
      </PageHeaderWrapper>
    );
  }
}

export default withRouter(Index);
