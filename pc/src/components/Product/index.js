import React, { Component } from 'react';
import { Input } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageHeaderWrapper from '../PageHeaderWrapper';
import { withRouter } from 'react-router-dom';
import Commodity from './Commodity';
import Service from './Service';

class Index extends Component {
  handleTabChange = key => {
    const { history, match } = this.props;
    switch (key) {
      case 'commodity':
          history.push(`${match.url}/commodity`);
        break;
      case 'service':
          history.push(`${match.url}/service`);
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
        key: 'commodity',
        tab: '商品管理',
      },
      {
        key: 'service',
        tab: '服务管理',
      },
    ];

    const { match, children, location } = this.props;

    return (
      <PageHeaderWrapper
        tabList={tabList}
        tabDefaultActiveKey="commodity"
        tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
        onTabChange={this.handleTabChange}
      >
        {children}
      </PageHeaderWrapper>
    );
  }
}

export default withRouter(Index);
