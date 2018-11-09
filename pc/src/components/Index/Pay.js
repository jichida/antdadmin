import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Checkbox,
} from 'antd';

import styles from './TableList.module.less';
import PayPicker from '../PayPicker';


class Pay extends PureComponent {

  renderForm() {
    return (
        <React.Fragment>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24} style={{minWidth:"500px"}}>
                    <div style={{border:"1px solid #e2e4e6", backgroundColor: "#f8fcff", height: "100px", minWidth: "500px"}}>
                        <p style={{paddingTop:"20px", paddingLeft:"20px", fontSize:"16"}}><b>开启全新展位和推广产品</b></p>
                        <p style={{float: "right", paddingRight: "20px", color: "red", fontSize:"18"}}><b>￥688</b></p>
                    </div>
                    <p style={{float: "right", marginRight:"-60px"}}><Link to="#">缴纳保证金注意事项</Link></p>
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={8} sm={24}>
                    <h4><b>选择支付方式：</b></h4>
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{marginBottom: "20px"}}>
                <Col md={8} sm={24}>
                    <PayPicker />
                </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{marginBottom: "20px"}}>
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
    // debugger;
    return (
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
          </div>
    );
  }
}

export default Pay;
