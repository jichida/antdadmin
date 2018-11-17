import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import dayGif from './day.gif';
import weekGif from './week.gif';
import monthGif from './month.gif';


const col = {
    borderStyle: 'solid',
    borderColor: '#e0dddd',
    width: '180px',
    height: '75px',
}

const colSelect = {
    ...col,
    borderColor: '#60b2f0',
}

const checkSelect = {
    float: 'right',
    display: 'block',
    position:'absolute',
    right: '0px',
    bottom:'-1px',    
}

const image = {
    textAlign: 'center',
}

const text = {
    color: '#60b2f0',
    fontSize: 18,
    fontStyle: 'bold',
    marginBottom: 5,
}

class PayPicker extends Component {

    onChange = (index)=>{
        this.props.onSelectRecommend(index);
    }

    render(){
        const { selectIndex } = this.props;
        return(
            <Row gutter={16} style={{width:"1300px", paddingTop: "30px", paddingBottom: "30px"}}>
                <Col key="1" span="4">
                    <Card onClick={()=>this.onChange(1)} style={selectIndex=== 1 ? colSelect : col}>
                        <p style={image}><span style={text}>￥100</span></p>
                        <p><img alt="" src={dayGif} height="75" style={checkSelect}/></p>
                    </Card>
                </Col>
                <Col key="2" span="4">
                    <Card onClick={()=>this.onChange(2)} style={selectIndex=== 2 ? colSelect : col}>
                        <p style={image}><span style={text}>￥600</span></p>
                        <p><img alt="" src={weekGif} height="75" style={checkSelect}/></p>
                    </Card>
                </Col>
                <Col key="3" span="4">
                    <Card onClick={()=>this.onChange(3)} style={selectIndex=== 3 ? colSelect : col}>
                        <p style={image}><span style={text}>￥3000</span></p>
                        <p><img alt="" src={monthGif} height="75" style={checkSelect}/></p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default PayPicker;