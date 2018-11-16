import React from 'react';
import {
    Input,
    Button,
    Modal,
    Row,
    Col,
  } from 'antd';

class MapInput extends React.PureComponent {

    state = {
        value: this.props.value,
        visible: false,
    }

    showModel = ()=>{
        this.setState({
            visible: true,
        })
    }

    handleOK = (e) => {
        console.log(e);

        console.log(this.props.onChange);
        this.props.onChange('新地址');

        this.setState({
            visible: false,
        });
    }

    handleInputChange = (e) =>{
        //console.log(e);
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col span={19}><Input readOnly placeholder = "请定位你的地址" value = {this.state.value} onChange={this.handleInputChange}/> </Col>
                    <Col span={4}><Button type= "primary" onClick = {this.showModel}>定位</Button></Col>   
                </Row>
                
                <Modal 
                    title = "定位你的店铺地址"
                    visible={ this.state.visible }
                    onOk = {this.handleOK}
                    onCancel = {this.handleCancel}
                >
                    <p>地图定位组件</p>
                </Modal>
            </React.Fragment>
        )
    }

}

export default MapInput;
