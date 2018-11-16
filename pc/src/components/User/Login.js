import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Alert,  } from 'antd';
import { Link } from 'react-router-dom';
import Login from '../Login';
import styles from './Login.module.less';
import {sendauth_request,common_err,login_request,loginwithauth_request} from '../../actions';

const { Tab,  Password, Mobile, Captcha, Submit } = Login;

class LoginPage extends Component {
  state = {
    type: 'mobile',
  };

  // componentWillReceiveProps (nextProps) {
  //     console.log(nextProps);
  //     if(nextProps.loginsuccess && !this.props.loginsuccess){
  //         console.log("------->" + JSON.stringify(this.props.location));
  //         //search:?next=/devicelist
  //         var fdStart = this.props.location.search.indexOf("?next=");
  //         if(fdStart === 0){
  //             const redirectRoute = this.props.location.search.substring(6);
  //             this.props.history.replace(redirectRoute);
  //         }
  //         else{
  //             this.props.history.replace('/');
  //         }
  //         return;
  //     }
  // }

  onTabChange = type => {
    this.setState({ type });
  };

  // onGetCaptcha = () =>{
  //   console.log(this.props);
  //   const { form,dispatch } = this.props;
  //   const mobile = form.getFieldValue('mobile');
  //   //验证手机号码是否合法
  //   if(mobile === ''){//不合法
  //     dispatch(common_err({type:'sendauth',errmsg:`请输入正确的手机号码`}));
  //     return;
  //   }
  //   dispatch(sendauth_request({username: mobile,reason:'login'}));

  // }

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch(sendauth_request({username: values.mobile,reason:'login'}))
          resolve();
        }
      });
    });



  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    const {dispatch} = this.props;

    if(!!err){
      console.log(err);
      // dispatch(common_err({type:'sendauth',errmsg:`错误了`}));
      return;
    }
    if(type === 'mobile'){
      const payload = {
        username:values.mobile,
        password:values.password
      };
      dispatch(login_request(payload));
    }
    else if(type === 'verification'){
      const payload = {
        username:values.mobile,
        authcode:values.Captcha
      };
      dispatch(loginwithauth_request(payload));
    }
    // mobile
    // values:{
    //   mobile:手机号码,
    //   password: 密码,
    // }
    //verification
    // values:{
    //     mobile: 手机号码
    //     Captcha: 验证码
    // }

  };


  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  // 说明：login,submitting为store中的登录状态
  // login { statue 登录成功或失败 ， type 密码登录或验证码登录 }
  // connect(({ login, loading }) => ({
  //   login,
  //   submitting: loading.effects['login/login'],
  // }))

  render() {
    const { submitting } = this.props;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <Tab key="mobile" tab="密码登录">
            { //login.status === 'error' &&
              //login.type === 'mobile' &&
              //!submitting &&
              //this.renderMessage("手机号或密码错误")
            }
            <Mobile name="mobile" placeholder="请输入手机号码" />
            <Password
              name="password"
              placeholder="请输入密码"
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
          </Tab>
          <Tab key="verification" tab="验证码登录">
            { //login.status === 'error' &&
              //login.type === 'verification' &&
              //!submitting &&
              //this.renderMessage("请确认手机号码！")
            }
            <Mobile name="mobile" placeholder="请输入手机号码" />
            <Captcha name="captcha" countDown={120} onGetCaptcha={this.onGetCaptcha} />
          </Tab>
          <Submit loading={submitting}>
            登录
          </Submit>
          <div className={styles.other}>
            <Link className={styles.register} to="/register/info">
              立即注册
            </Link>
          </div>
        </Login>
      </div>
    );
  }
}
LoginPage = connect()(LoginPage);
export default LoginPage;
