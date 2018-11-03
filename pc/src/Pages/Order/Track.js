import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
  Timeline,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

class Track extends PureComponent {

  render() {
    return (
      <PageHeaderWrapper
        title="订单发货"
        wrapperClassName={styles.dvancedForm}
      >
        <Card className={styles.card} bordered={false}>
            <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                    <img src={}></img>
                </Col>
                <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                   <h4>订单编号：{}</h4>           
                </Col>
                <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}></Col>
            </Row>
            <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                
                </Col>
                <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                    商品名称：{}          
                </Col>
                <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                    
                </Col>
            </Row>
            <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                
                </Col>
                <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                    创建时间：         
                </Col>
                <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                    订单状态：<p style={{color: "bule"}}>{}</p>
                 </Col>
            </Row>
            <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                
                </Col>
                <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                     支付时间：         
                </Col>
                <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                    发货时间：
                 </Col>
            </Row>
            <hr />
            <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                
                </Col>
                <Col lg={24} md={24} sm={24}>
                    <Timeline reverse={true}>
                        <Timeline.Item>商品从仓库出发</Timeline.Item>
                        <Timeline.Item>商品从南京发至北京</Timeline.Item>
                        <Timeline.Item>快递员正在派件</Timeline.Item>
                        <Timeline.Item>快件已经签收</Timeline.Item>
                    </Timeline>
                </Col>
                <Col lg={6} md={12} sm={24}>
                
                </Col>
            </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Track;
