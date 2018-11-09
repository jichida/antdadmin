import React, { PureComponent } from 'react';
import moment from 'moment';
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Radio,
  TimePicker,
} from 'antd';

import styles from './BaseView.module.less';

const Option = Select.Option;
const FormItem = Form.Item;

class InfoEdit extends PureComponent {

handleSubmit = e => {
    const { form: { validateFields } } = this.props;
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

        if(!err){
        //
        }
    })
    };  

  render() {
    const { getFieldDecorator } = this.props.form;
    const { onEditOver } = this.props;
    
    return (
        <Card bordered={false} style={{ marginBottom: 24 }} loading={false}>
            <div className={styles.avatarHolder} style={{textAlign: "center", marginBottom: "10px"}}>
                <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="100" />
            </div>

            <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
                <FormItem label="运营状态">
                    {getFieldDecorator('operation', {
                        initialValue: "a",
                    })(
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">运营中</Radio.Button>
                            <Radio.Button value="b">关闭</Radio.Button>
                        </Radio.Group>

                    )}
                </FormItem>
                <FormItem label="运营时间">
                {getFieldDecorator('operationstart', {
                    rules: [
                    {
                        required: true,
                        message: "开始时间",
                    },
                    ],
                })(
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="开始时间" />
                )}-
                {getFieldDecorator('operationend', {
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
                        <Option value="China">店铺行业</Option>
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
                    <Option value="China">工种是啥</Option>
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
                    <Button style={{marginLeft: 10}} onClick={onEditOver}>取消</Button>
                </FormItem>
                
            </Form>
        </Card>
    );
  }
}

export default Form.create()(InfoEdit);
