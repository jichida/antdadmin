import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Select, DatePicker, Upload, Icon, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './style.module.less';
import {registerfill_request} from '../../actions';


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


  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { form, dispatch } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = e => {
      validateFields((err, values)=>{
        console.log(values);

        // values:{
        //   name: 姓名
        //   id: 身份证号码
        //   registerdate: 注册日期
        //   kind: 工种
        //   company: 公司
        //   industry: 行业
        //   license: 营业执照
        // }
        const shopinfo = {

        }
        dispatch(registerfill_request({shopinfo}));
        //if(!err){
          // history.push('/register/result');
        //}
      })

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
          <Input.Group>
            <Col span={12}>
            {getFieldDecorator('registerdate', {
            rules: [
              {
                required: true,
                message: '请输入注册日期',
              },
            ],
            })(<DatePicker placeholder="注册日期" style={{width: "100%"}} />)}
            </Col>
            <Col span={12}>
            {getFieldDecorator('kind', {
            rules: [
              {
                required: true,
                message: '请输入工种',
              },
            ],
            })(
              <Select placeholder="工种"  style={{width: "100%"}}>
                <Option value="a" >工种</Option>
              </Select>
          )}
            </Col>
          </Input.Group>
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
              <Select placeholder="行业">
                <Option value="a" >保健</Option>
              </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="营业执照">
        {getFieldDecorator('license', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
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
          <Button type="primary" onClick={onValidateForm}  style={{ width: "100%"}}>{/* loading={submitting} */}
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
Step2 = connect()(Step2);
export default withRouter(Form.create()(Step2));
