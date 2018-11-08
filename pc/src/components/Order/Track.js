import React, { PureComponent } from 'react';
import {
  Card,
  Col,
  Row,
  Timeline,
} from 'antd';
import PageHeaderWrapper from '../PageHeaderWrapper';
import styles from './style.module.less';



class Track extends PureComponent {

  render() {
    return (
      <PageHeaderWrapper
        title="订单跟踪"
        wrapperClassName={styles.dvancedForm}
      >
        <Card className={styles.card} bordered={false}>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={1} md={3} >
                    <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="36"></img>
                </Col>
                <Col lg={{ span: 8, offset:2 }} md={{ span: 12, offset:2 }} >
                   <h3><b>订单编号：1234567890</b></h3>           
                </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                    商品名称：1234567890          
                </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                    创建时间：20181101         
                </Col>
                <Col lg={{ span: 8, offset:1 }} md={{ span: 12, offset:1 }} >
                    订单状态：<span style={{color: "#0272c6"}}>运输中</span>
                 </Col>
            </Row>
            <Row gutter={16} style={{marginBottom:10}}>
                <Col lg={{ span: 8, offset:3 }} md={{ span: 12, offset:3 }} >
                     支付时间：20181101         
                </Col>
                <Col lg={{ span: 8, offset:1 }} md={{ span: 12, offset:1 }} >
                    发货时间： 20181101
                 </Col>
            </Row>
            <hr />
            <Row gutter={16} style={{marginTop: 20}}>
                <Col lg={{span:20, offset:3}} md={{span:20,offset:3}} sm={24}>
                    <Timeline reverse={true}>
                        <Timeline.Item>商品从仓库出发</Timeline.Item>
                        <Timeline.Item>商品从南京发至北京</Timeline.Item>
                        <Timeline.Item>快递员正在派件</Timeline.Item>
                        <Timeline.Item>快件已经签收</Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Track;
