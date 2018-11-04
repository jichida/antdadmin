import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';

import styles from './TableList.less';


class Recharge extends PureComponent {

  renderForm() {
    return (
        <React.Fragment>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{ marginBottom:"20px"}}>
                <Col md={8} sm={24}>
                    充值金额：<InputNumber placeholder="充值金额" />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{ marginBottom:"20px"}}>
                <Col md={8} sm={24}>
                    选择支付方式：
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
