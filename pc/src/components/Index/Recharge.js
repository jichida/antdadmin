import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Button,
  InputNumber,
} from 'antd';
import PayPicker from '../PayPicker';
import RecommendPicker from '../RecommendPicker';

import styles from './TableList.module.less';


class Recharge extends PureComponent {

  renderForm() {
    return (
        <React.Fragment>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{ marginBottom:"20px", marginTop: "20px",}}>
                <Col md={8} sm={24}>
                    <h3>充值金额：<InputNumber placeholder="充值金额" style={{minWidth:"150px"}} /></h3>
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{ marginBottom:"20px"}}>
                <Col md={8} sm={24}>
                    <h3>选择支付方式：</h3><PayPicker />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{ marginBottom:"20px"}}>
                <Col md={8} sm={24}>
                    <h3>选择推荐方式：</h3><RecommendPicker />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24} >
                    <Button type="primary">立即充值</Button>
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

export default Recharge;
