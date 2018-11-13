import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Divider, Popover, Row, Col, Progress } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './style.module.less';
import {ui_authticker,sendauth_request,common_err,register_request} from '../../actions';

const FormItem = Form.Item;

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      强度：强
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      强度：中
    </div>
  ),
  poor: (
    <div className={styles.error}>
      强度：太短
    </div>
  ),
};

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

class Step1 extends React.PureComponent {

  state = {
    confirmDirty: false,
    visible: false,
    help: '',
    prefix: '86',
    current: 0,
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  componentWillUnmount(){
    const {dispatch} = this.props;
    dispatch(ui_authticker({authticker:0}));

  }
  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不匹配!');
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    if (!value) {
      this.setState({
        help: '请输入密码',
        visible: !!value,
      });
      callback('error');
    } else {
      this.setState({
        help: '',
      });
      if (!visible) {
        this.setState({
          visible: !!value,
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const { form } = this.props;
        if (value && confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    }
  };

  onGetCaptcha = () => {

    const { form,dispatch } = this.props;
    const mobile = form.getFieldValue('mobile');
    //验证手机号码是否合法
    if(mobile === ''){//不合法
      dispatch(common_err({type:'sendauth',errmsg:`请输入正确的手机号码`}));
      return;
    }
    dispatch(sendauth_request({username: mobile,reason:'register'}));
  };

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };

  changePrefix = value => {
    this.setState({
      prefix: value,
    });
  };

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };


  render() {
    const { form,dispatch,authticker } = this.props;
    const { help, visible } = this.state;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = () => {
      validateFields((err, values) => {

        console.log(values);
        dispatch(register_request({
          username:values.mobile,
          password:values.password,
          authcode:values.captcha
        }));
        //if(!err){
          // history.push('/register/verify');
        //}

        // values：表单json数据格式
        // {
        //   mobile: 11位数字,
        //   password: 密码，至少六位
        //   confirm: 密码确认
        //   captcha: 验证码

        // }


      // 如果没有校验错误，则把数据存储到 store
      //   if (!err) {
      //     dispatch({
      //       type: 'form/saveStepFormData',
      //       payload: values,
      //     });
      //     router.push('/form/step-form/confirm');
      //   }
      });

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
                  {passwordStatusMap[this.getPasswordStatus()]}
                  {this.renderPasswordProgress()}
                  <div style={{ marginTop: 10 }}>
                      请至少输入 6 个字符。请不要使用容易被猜到的密码。
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
                  disabled={authticker}
                  className={styles.getCaptcha}
                  onClick={this.onGetCaptcha}
                >
                  {authticker>0
                    ? `${authticker} s`
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
const mapStateToProps =  ({app:{authticker}}) =>{
  return {authticker};
};
Step1 = connect(mapStateToProps)(Step1);
export default withRouter(Form.create()(Step1));
