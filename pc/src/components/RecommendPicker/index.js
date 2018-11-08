import React, { Component } from 'react';
import { Row, Col, Icon, Card } from 'antd';

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

const check = {
    display: 'none',
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
    state = {
        select: 0,
    }

    onChange = (index)=>{
        this.setState({select: index})
    }

    render(){

        return(
            <Row gutter="16" style={{width:"1300px"}}>
                <Col key="1" span="4">
                    <Card onClick={()=>this.onChange(1)} style={this.state.select=== 1 ? colSelect : col}>
                        <p style={image}><span style={text}>￥100</span></p>
                        <p><img src={dayGif} height="75" style={checkSelect}/></p>
                    </Card>
                </Col>
                <Col key="2" span="4">
                    <Card onClick={()=>this.onChange(2)} style={this.state.select=== 2 ? colSelect : col}>
                        <p style={image}><span style={text}>￥600</span></p>
                        <p><img src={weekGif} height="75" style={checkSelect}/></p>
                    </Card>
                </Col>
                <Col key="3" span="4">
                    <Card onClick={()=>this.onChange(3)} style={this.state.select=== 3 ? colSelect : col}>
                        <p style={image}><span style={text}>￥3000</span></p>
                        <p><img src={monthGif} height="75" style={checkSelect}/></p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default PayPicker;