import React, { Fragment } from 'react';
import { Button, Row, Col } from 'antd';
import Result from '../../Result';
import styles from './style.module.less';

class Step3 extends React.PureComponent {
  render() {
    const { data } = this.props;
    const onFinish = () => {
      //router.push('/form/step-form/info');
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

export default Step3;
