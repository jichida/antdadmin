import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import {
  Card,
  Col,
  Row,
} from 'antd';
import styles from './style.module.less';
import lodashget from 'lodash.get';

class OrderDetail extends PureComponent {
    state = {
      data:[]
    };

  render() {
    const {curorder} = this.props;
    return (
        <Card className={styles.card} bordered={false}>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={1} md={3} >
                    <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="36"></img>
                </Col>
                <Col lg={{ span: 8, offset:2 }} md={{ span: 12, offset:2 }} >
                   <h3><b>订单编号：{lodashget(curorder,'_id','')}</b></h3>
                </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                    商品名称：1234567890
                </Col>
                <Col lg={{ span: 8, offset:1 }} md={{ span: 12, offset:1 }} >
                    商品配置：升级加强版；银色；官方标配
                 </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                    商品买家：欧阳锋
                </Col>
                <Col lg={{ span: 8, offset:1 }} md={{ span: 12, offset:1 }} >
                    买家手机号：12345678901
                 </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                    购买时间：20181101
                </Col>
                <Col lg={{ span: 8, offset:1 }} md={{ span: 12, offset:1 }} >
                    购买数量： 1
                 </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                    实付金额：￥：300
                </Col>
                <Col lg={{ span: 8, offset:1 }} md={{ span: 12, offset:1 }} >
                    
                 </Col>
            </Row>
        </Card>
    );
  }
}

const mapStateToProps = ({db},props) => {
  const id = lodashget(props,'match.params.id');
  const curorder = lodashget(db,`orders.${id}`);
  // debugger;
  return {curorder};
};

OrderDetail = connect(mapStateToProps)(withRouter(OrderDetail));
export default OrderDetail;
