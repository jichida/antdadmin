import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Result from '../Result';
import styles from './style.module.less';

class Step3 extends React.PureComponent {
  render() {
    const { history } = this.props;
    const onFinish = () => {
      history.push('/');
    };

    const actions = (
        <Button type="primary" onClick={onFinish} style={{width: "100%"}}>
          完成
        </Button>
    );
    return (
      <Result
        type="success"
        title="操作成功"
        description="我们将尽快对你的信息进行审核"
        actions={actions}
        className={styles.result}
      />
    );
  }
}

export default withRouter(Step3);
