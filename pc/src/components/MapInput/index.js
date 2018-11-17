import React from 'react';
import {
    Input,
    Button,
    Modal,
    Row,
    Col,
  } from 'antd';
import { styles } from 'ansi-colors';

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
    
        let cur = '新位置' ;
        this.setState({ value: cur });
        
        this.triggerChange(cur);
    
        this.setState({
            visible: false,
        });
    }

    handleInputChange = (e) =>{
        //console.log(e);
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
          onChange(changedValue);
        }
    }

    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col span={19}><Input readOnly placeholder = "请定位你的地址" value = {this.state.value} onChange={this.handleInputChange}/> </Col>
                    <Col span={4} style={{paddingLeft:5}}><Button type= "primary" onClick = {this.showModel}>定位</Button></Col>   
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
