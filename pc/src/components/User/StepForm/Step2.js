import React from 'react';
import { Form, Input, Button, Alert, Divider, Select, DatePicker, Upload, Icon } from 'antd';
import styles from './style.module.less';

const FormItem = Form.Item;

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 18,
    offset:1,
  },
};

const formItenBlackLabel = {
  ...formItemLayout,
  wrapperCol: {
    span: 18,
    offset: 6,
  }
}


class Step2 extends React.PureComponent {
  render() {
    const { form, data, submitting } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = e => {
      e.preventDefault();
      
    };
    return (
      <Form layout="horizontal" className={styles.stepForm}>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="个人信息:">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入姓名',
              },
            ],
          })(<Input placeholder="请输入姓名" />)}
        </Form.Item>
        <Form.Item {...formItenBlackLabel} className={styles.stepFormText} label="">
          {getFieldDecorator('id', {
            rules: [
              {
                required: true,
                message: '请输入身份证号',
              },
            ],
          })(<Input placeholder="请输入身份证号" />)}
        </Form.Item>
        <Form.Item {...formItenBlackLabel} className={styles.stepFormText} label="">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入注册日期',
              },
            ],
            })
            (
              <DatePicker placeholder="注册日期" style={{width: "50%",marginRight: "10%"}} />
          )}
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入工种',
              },
            ],
            })(
              <Select defaultValue="a" placeholder="工种"  style={{width: "40%"}}>
                <Option value="a" >工种</Option>
              </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="企业信息">
          {getFieldDecorator('company', {
            rules: [
              {
                required: true,
                message: '请输入公司名称',
              },
            ],
          })(<Input placeholder="请输入公司名称" />)}
        </Form.Item>
        <Form.Item {...formItenBlackLabel} className={styles.stepFormText} label="">
          {getFieldDecorator('industry', {
            rules: [
              {
                required: true,
                message: '请输入行业',
              },
            ],
            })(
              <Select defaultValue="a" placeholder="行业">
                <Option value="a" >保健</Option>
              </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="营业执照">
        {getFieldDecorator('license', {
            rules: [
              {
                required: true,
                message: '请上传营业执照',
              },
            ],
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button style={{ width: 100, height: 100}}>
                  <Icon type="plus" theme="outlined" /> 图片
                </Button>
              </Upload>
          )}
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 8 }}
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: 24,
              offset: 0,
            },
          }}
          label=""
        >
          <Button type="primary" onClick={onValidateForm} loading={submitting} style={{ width: "100%"}}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(Step2);
