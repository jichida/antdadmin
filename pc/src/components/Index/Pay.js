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
  Checkbox,
} from 'antd';

import styles from './TableList.less';


class Pay extends PureComponent {

  renderForm() {
    return (
        <React.Fragment>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24}>
                    <div style={{border:"1px", backgroundColor: "#b2d5ee", height: "120px"}}>
                        <p style={{padding:"20px"}}><h3><b>开启全新展位和推广产品</b></h3></p>
                        <p style={{float: "right", paddingRight: "20px"}}><h3 style={{color: "red"}}>￥688</h3></p>
                    </div>
                    <p style={{float: "right"}}><a href="#">缴纳保证金注意事项</a></p>
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24}>
                    <h4>选择支付方式：</h4>
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24}>
                    
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24}>
                <Checkbox>我同意《爱上家某某条款》的内容</Checkbox>
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24} >
                    <Button type="primary">立即缴纳</Button>
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

export default Pay;
