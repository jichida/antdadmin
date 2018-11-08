import React, { PureComponent, Fragment } from 'react';
import { Card, Steps } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './Register.module.less';

const { Step } = Steps;

class Register extends PureComponent {
  
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'verify':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <Fragment>
        <Steps current={this.getCurrentStep()} className={styles.steps} style={{marginBottom: 30, maxWidth:600}}>
              <Step title="注册信息" />
              <Step title="审核信息" />
              <Step title="完成" />
        </Steps>
        <Card bordered={false} style={{backgroundColor: "transparent"}}>
              {children}
        </Card>
        </Fragment>
      </div>
    );
  }
}

export default withRouter(Register);