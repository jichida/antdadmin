import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import {
  Card,
  Col,
  Row,
  Timeline,
} from 'antd';
import PageHeaderWrapper from '../PageHeaderWrapper';
import styles from './style.module.less';
import lodashget from 'lodash.get';
import {callthen} from '../../sagas/pagination';
import {trackorder_request,trackorder_result,set_weui} from '../../actions';

class Track extends PureComponent {
    state = {
      data:[]
    };
    componentDidMount(){
      const {dispatch,curorder} = this.props;
      dispatch(callthen(trackorder_request,trackorder_result,{orderid:lodashget(curorder,'_id','')})).then((result)=> {
        console.log(result);
        this.setState({data:lodashget(result,'data',[])});
      }).catch((e)=>{
        dispatch(set_weui({
          toast:{
          text:`查询快递失败`,
          show: true,
          type:'warning'
        }}));
      });

      // dispatch(trackorder_request({orderid:''}));
      // {
      // 	"message": "ok",
      // 	"nu": "75108966715339",
      // 	"ischeck": "0",
      // 	"condition": "00",
      // 	"com": "zhongtong",
      // 	"status": "200",
      // 	"state": "0",
      // 	"data": [{
      // 		"time": "2018-11-14 03:37:34",
      // 		"ftime": "2018-11-14 03:37:34",
      // 		"context": "【北京市】 快件离开 【北京】 发往 【常州中转部】"
      // 	}, {
      // 		"time": "2018-11-14 02:52:16",
      // 		"ftime": "2018-11-14 02:52:16",
      // 		"context": "【北京市】 快件到达 【北京】"
      // 	}, {
      // 		"time": "2018-11-13 19:53:27",
      // 		"ftime": "2018-11-13 19:53:27",
      // 		"context": "【北京市】 快件离开 【北京总部基地】 发往 【常州】"
      // 	}, {
      // 		"time": "2018-11-13 16:09:27",
      // 		"ftime": "2018-11-13 16:09:27",
      // 		"context": "【北京市】 【北京总部基地】（010-67440751） 的 王宝雷13651307061 （13651307061） 已揽收"
      // 	}]
      // }
  }

  render() {
    const {curorder} = this.props;
    return (
    //   <PageHeaderWrapper
    //     title="订单跟踪"
    //     wrapperClassName={styles.dvancedForm}
    //   >
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
    //   </PageHeaderWrapper>
    );
  }
}

const mapStateToProps = ({db},props) => {
  const id = lodashget(props,'match.params.id');
  const curorder = lodashget(db,`orders.${id}`);
  // debugger;
  return {curorder};
};

Track = connect(mapStateToProps)(withRouter(Track));
export default Track;
