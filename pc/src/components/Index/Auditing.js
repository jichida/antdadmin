import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Result from '../Result';
import styles from './style.module.less';

class Auditing extends React.PureComponent {
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
        type="info"
        title={<div><span>注册资料已提交，</span><span style={{color: "#fcb45e"}}>待审核</span></div>}
        description={<div><p style={{color: "#fcb45e", fontSize: "16px"}}>审核将于5个工作日内完成</p><p style={{color: "#fcb45e", fontSize: "12px"}}>审核结果会以短信的形式通知你</p></div>}
        actions={actions}
        className={styles.result}
      />
    );
  }
}

export default withRouter(Auditing);
