import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Result from '../Result';
import styles from './style.module.less';

class AuditError extends React.PureComponent {
  render() {
    const { history } = this.props;
    const onFinish = () => {
      history.push('/unaudited/0');
    };

    const actions = (
        <Button type="primary" onClick={onFinish} style={{width: "100%"}}>
          填写店铺信息
        </Button>
    );
    return (
      <Result
        type="error"
        title="审核未通过"
        description={<p style={{color: "#d50c36", fontSize: "16px"}}>理由：注册资料不正确</p>}
        actions={actions}
        className={styles.result}
      />
    );
  }
}

export default withRouter(AuditError);
