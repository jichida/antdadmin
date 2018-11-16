import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import moment from 'moment';
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Radio,
  TimePicker,
  Row,
  Col,
} from 'antd';
import MapInput from '../MapInput';
import lodashget from 'lodash.get';
import {callthen} from '../../sagas/pagination';
import {fillprofile_request,fillprofile_result,set_weui} from '../../actions';

import styles from './BaseView.module.less';

const Option = Select.Option;
const FormItem = Form.Item;

const init = {
    start: moment("8:00","HH:mm"),  // 运营开始时间
    end: moment("24:00","HH:mm"), // 运营结束时间
    name: '南京玄武家政', // 店铺名称
    industry: '家政', // 行业
    kind: '经理', // 工种
    //address: '南京市玄武区', // 商家地址
};

const RenderForm = Form.create({
    mapPropsToFields(props) {
        return {
            operation: Form.createFormField({
                value: props.operation,
            }),
            start: Form.createFormField({
                value: props.start,
            }),
            end: Form.createFormField({
                value: props.end,
            }),
            name: Form.createFormField({
                value: props.name,
            }),
            industry: Form.createFormField({
                value: props.industry,
            }),
            kind: Form.createFormField({
                value: props.kind,
            }),
            address: Form.createFormField({
                value: props.address,
            }),
    };
  }
})((props)=>{
    const { getFieldDecorator } = props.form;
    const { form: { validateFields } } = props;
    const {dispatch} = props;
    const handleSubmit = e => {
        validateFields((err, values)=>{
            console.log(values);
            
            // 店铺维护：
            // values: {
            // operation：运营状态
            // operationtstart：运营开始时间
            // operationend：运营结束时间
            // name：名称
            // industry: 行业
            // kind: 工种
            // address: 店铺地址
            //   }
            const shopinfo = {
              name:values.name,
            };
            if(!err){
                dispatch(callthen(fillprofile_request,fillprofile_result,
                  {shopinfo})).then((result)=> {
                  console.log(result);
                }).catch((e)=>{
                  dispatch(set_weui({
                    toast:{
                    text:`编辑商铺信息失败`,
                    show: true,
                    type:'warning'
                  }}));
                });
            }
          })
        };

    return (
        <Form layout="vertical" onSubmit={handleSubmit} hideRequiredMark>
            <Row gutter={16}>
                <Col span={11}>
                    <FormItem label="开始运营时间">

                    {getFieldDecorator('start', {
                        rules: [
                        {
                            required: true,
                            message: "开始运营时间",
                        },
                        ],
                    })(
                        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="开始时间" style={{width: "100%"}} />
                    )}
                    </FormItem>
                </Col>
                <Col span={11} offset={1}>
                    <FormItem label="结束运营时间">
                    {getFieldDecorator('end', {
                        rules: [
                        {
                            required: true,
                            message: "结束时间",
                        },
                        ],
                    })(
                        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="结束时间" style={{width: "100%"}} />
                    )}
                    </FormItem>
                </Col>
            </Row>

            <FormItem label="店铺名称">
            {getFieldDecorator('name', {
                rules: [
                {
                    required: true,
                    message: '请输入店铺名称',
                },
                ],
            })(<Input />)}
            </FormItem>
            <Row gutter={16}>
                <Col span={11}>
                    <FormItem label="店铺行业">
                    {getFieldDecorator('industry', {
                        rules: [
                        {
                            required: true,
                            message: '请选择店铺行业',
                        },
                        ],
                    })(
                        <Select placeholder="店铺行业" style={{ maxWidth: 220 }} style={{width: "100%"}}>
                            <Option value="家政">家政</Option>
                            <Option value="维修">维修</Option>
                        </Select>
                    )}
                    </FormItem>
                </Col>
                <Col span={11} offset={1}>
                    <FormItem label="工种">
                    {getFieldDecorator('kind', {
                        rules: [
                        {
                            required: true,
                            message: '请选择工种',
                        },
                        ],
                    })(
                        <Select placeholder="工种" style={{width: "100%"}}>
                            <Option value="经理">经理</Option>
                            <Option value="业务员">业务员</Option>
                        </Select>
                    )}
                    </FormItem>
                </Col>
            </Row>
            <FormItem label="店铺地址">
            {getFieldDecorator('address', {
                rules: [
                {
                    required: true,
                    message: '请输入店铺地址',
                },
                ],
            })(<MapInput />)}
            </FormItem>
            <FormItem style={{textAlign: "center"}}>
                <Button type="primary" htmlType="submit" style={{width: "50%"}}>保存</Button>
            </FormItem>

        </Form>
    );
})


class InfoEdit extends PureComponent {



  render() {

    return (
        <Card bordered={false} style={{ marginBottom: 24 }} loading={false}>
            <div className={styles.avatarHolder} style={{textAlign: "center", marginBottom: "50px"}}>
                <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="100" />
            </div>

            <RenderForm {...init} />
        </Card>
    );
  }
}

const mapStateToProps =  ({userlogin}) =>{
  return {userlogin};
};

export default connect(mapStateToProps)(InfoEdit);
