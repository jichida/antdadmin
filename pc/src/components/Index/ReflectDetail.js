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
const { TextArea } = Input;

class ReflectDetail extends PureComponent {

  renderForm() {
    return (
        <React.Fragment>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{marginBottom: "10px"}}>
                <Col md={8} sm={24}>
                    <h3>提现金额：</h3><InputNumber placeholder="提现金额" />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{marginBottom: "10px"}}>
                <Col md={8} sm={24}>
                    <h3>提现说明：</h3><TextArea Row={4} placeholder="提现时会收取0.1%的手续费，最低0.1元" />
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
