import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Input,
  Button,
  InputNumber,
} from 'antd';

import styles from './TableList.module.less';
const { TextArea } = Input;

class ReflectDetail extends PureComponent {

  renderForm() {
    return (
        <React.Fragment>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{marginBottom: "10px"}}>
                <Col md={8} sm={24}>
                    <h3>提现金额：</h3><InputNumber placeholder="提现金额" style={{minWidth: 200}} />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{marginBottom: "10px"}}>
                <Col md={8} sm={24}>
                    <h3>提现说明：</h3><TextArea autosize={{ minRows: 5, maxRows: 10 }} placeholder="提现时会收取0.1%的手续费，最低0.1元" style={{minWidth:350}} />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24}>
                    <Button type="primary">确定</Button>
                </Col>
            </Row>
        </React.Fragment>
    );
  }

  render() {
    return (
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
          </div>
    );
  }
}

export default ReflectDetail;
