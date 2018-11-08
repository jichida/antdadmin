import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Steps } from 'antd';
import styles from './style.module.less';

const { Step } = Steps;

class StepForm extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case '注册信息':
        return 0;
      case '审核信息':
        return 1;
      case '完成':
        return 2;
      default:
        return 0;
    }
  }//current={this.getCurrentStep()} 

  render() {
    const { location, children } = this.props;
    return (
      <Fragment>
        <Steps style={{marginBottom: 30}} size="small">
          <Step title="注册信息" />
          <Step title="审核信息" />
          <Step title="完成" />
        </Steps>

        <Card bordered={false} style={{backgroundColor: "transparent"}}>
          <Fragment>
            {children}
          </Fragment>
        </Card>

      </Fragment>
    );
  }
}

export default withRouter(StepForm)
