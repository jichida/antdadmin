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
import lodashget from 'lodash.get';
import {callthen} from '../../sagas/pagination';
import {fillprofile_request,fillprofile_result,set_weui} from '../../actions';

import styles from './BaseView.module.less';

const Option = Select.Option;
const FormItem = Form.Item;

const init = {
    operation: 'on',//运营状态 on | off
    start: moment("8:00","HH:mm"),  // 运营开始时间
    end: moment("24:00","HH:mm"), // 运营结束时间
    name: '南京玄武家政', // 店铺名称
    industry: '家政', // 行业
    kind: '经理', // 工种
    address: '南京市玄武区', // 商家地址
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
    const handleSubmit = e => {
        const { form: { validateFields },onClickSubmit } = props;
        validateFields(onClickSubmit);
    };
    return (
        <Form layout="vertical" onSubmit={handleSubmit} hideRequiredMark>
            <FormItem label="运营状态">
                {getFieldDecorator('operation', {
                })(
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value="on">运营中</Radio.Button>
                        <Radio.Button value="off">关闭</Radio.Button>
                    </Radio.Group>

                )}
            </FormItem>

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
                <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="开始时间" />
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
                        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="结束时间" />
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
            <FormItem label="店铺行业">
            {getFieldDecorator('industry', {
                rules: [
                {
                    required: true,
                    message: '请选择店铺行业',
                },
                ],
            })(
                <Select placeholder="店铺行业" style={{ maxWidth: 220 }}>
                    <Option value="家政">家政</Option>
                    <Option value="维修">维修</Option>
                </Select>
            )}
            </FormItem>
            <FormItem label="工种">
            {getFieldDecorator('kind', {
                rules: [
                {
                    required: true,
                    message: '请选择工种',
                },
                ],
            })(
                <Select placeholder="工种" style={{ maxWidth: 220 }}>
                    <Option value="经理">经理</Option>
                    <Option value="业务员">业务员</Option>
                </Select>
            )}
            </FormItem>
            <FormItem label="店铺地址">
            {getFieldDecorator('address', {
                rules: [
                {
                    required: true,
                    message: '请输入店铺地址',
                },
                ],
            })(<Input />)}
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">保存</Button>
                <Button style={{marginLeft: 10}} onClick={props.onEditOver}>取消</Button>
            </FormItem>

        </Form>
    );
})


class InfoEdit extends PureComponent {

onClickSubmit = (err, values)=>{
    console.log(values);
    const {dispatch,onEditOver} = this.props;
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
          onEditOver();
        }).catch((e)=>{
          dispatch(set_weui({
            toast:{
            text:`编辑商铺信息失败`,
            show: true,
            type:'warning'
          }}));
        });
    }
}

  render() {
    const { onEditOver } = this.props;

    return (
        <Card bordered={false} style={{ marginBottom: 24 }} loading={false}>
            <div className={styles.avatarHolder} style={{textAlign: "center", marginBottom: "10px"}}>
                <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="100" />
            </div>

            <RenderForm {...init} onClickSubmit={this.onClickSubmit} onEditOver={onEditOver} />
        </Card>
    );
  }
}

const mapStateToProps =  ({userlogin}) =>{
  return {userlogin};
};

export default connect(mapStateToProps)(InfoEdit);
