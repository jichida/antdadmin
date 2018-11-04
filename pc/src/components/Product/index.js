import React, { Component } from 'react';
import { Input } from 'antd';
import PageHeaderWrapper from '../PageHeaderWrapper';

class Index extends Component {
  handleTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'articles':
        //router.push(`${match.url}/commodity`);
        break;
      case 'applications':
        //router.push(`${match.url}/service`);
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
        title="产品管理"
        tabList={tabList}
        //tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
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

export default Index;
