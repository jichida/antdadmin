import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Divider, Popover, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './style.module.less';
import {sendauth_request,common_err} from '../../actions';

const FormItem = Form.Item;



class Step1 extends React.PureComponent {

  state = {
    count: 0,
    confirmDirty: false,
    visible: false,
    help: '',
    prefix: '86',
    current: 0,
  };

  onGetCaptcha = () =>{
    const { form,dispatch } = this.props;
    const mobile = form.getFieldValue('mobile');
    //验证手机号码是否合法
    if(mobile === ''){//不合法
      dispatch(common_err({type:'sendauth',errmsg:`请输入正确的手机号码`}));
      return;
    }
    dispatch(sendauth_request({username: mobile,reason:'register'}));
  };

  render() {
    const { form, history } = this.props;
    const { count, help, visible } = this.state;
    const { getFieldDecorator } = form;
    const onValidateForm = (err, values) => {
      console.log(values);
      // validateFields((err, values) => {
      //   if (!err) {
      //     dispatch({
      //       type: 'form/saveStepFormData',
      //       payload: values,
      //     });
      //     router.push('/form/step-form/confirm');
      //   }
      // });
      history.push('/register/verify');
    };
    return (
      <Fragment>
        <Form layout="horizontal" className={styles.stepForm} hideRequiredMark>
        <FormItem>
              {getFieldDecorator('mobile', {
                rules: [
                  {
                    required: true,
                    message: '请输入手机号码',
                  },
                  {
                    pattern: /^\d{11}$/,
                    message: '手机号码错误！',
                  },
                ],
              })(
                <Input
                  size="large"
                  placeholder="手机号码"
                />
              )}
          </FormItem>
          <FormItem help={help}>
            <Popover
              getPopupContainer={node => node.parentNode}
              content={
                <div style={{ padding: '4px 0' }}>
                  {
                    //passwordStatusMap[this.getPasswordStatus()]
                  }
                  {
                    //this.renderPasswordProgress()
                  }
                  <div style={{ marginTop: 10 }}>
                    密码至少6位，区分大小写
                  </div>
                </div>
              }
              overlayStyle={{ width: 240 }}
              placement="right"
              visible={visible}
            >
              {getFieldDecorator('password', {
                rules: [
                  {
                    validator: this.checkPassword,
                  },
                ],
              })(
                <Input
                  size="large"
                  type="password"
                  placeholder="至少6位密码，区分大小写"
                />
              )}
            </Popover>
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认密码',
                },
                {
                  validator: this.checkConfirm,
                },
              ],
            })(
              <Input
                size="large"
                type="password"
                placeholder= "确认密码"
              />
            )}
          </FormItem>
          <FormItem>
            <Row gutter={8}>
              <Col span={16}>
                {getFieldDecorator('captcha', {
                  rules: [
                    {
                      required: true,
                      message: '请输入验证码',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    placeholder="验证码"
                  />
                )}
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  disabled={count}
                  className={styles.getCaptcha}
                  onClick={this.onGetCaptcha}
                >
                  {count
                    ? `${count} s`
                    : '获取验证码'}
                </Button>
              </Col>
            </Row>
          </FormItem>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: {
                span: 24,
                offset: 0,
              },
            }}
            label=""
          >
            <Button type="primary" onClick={onValidateForm} style={{width: "100%"}}>
              下一步
            </Button>
          </Form.Item>
        </Form>
        <Divider style={{ margin: '40px 0 24px' }} />
      </Fragment>
    );
  }
}

Step1 = connect()(Step1);
export default withRouter(Form.create()(Step1));
