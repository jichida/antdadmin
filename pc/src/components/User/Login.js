import React, { Component } from 'react';
import {  Alert,  } from 'antd';
import { Link } from 'react-router-dom';
import Login from '../Login';
import styles from './Login.module.less';

const { Tab,  Password, Mobile, Captcha, Submit } = Login;

class LoginPage extends Component {
  state = {
    type: 'mobile',
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        // if (err) {
        //   reject(err);
        // } else {
        //   const { dispatch } = this.props;
        //   dispatch({
        //     type: 'login/getCaptcha',
        //     payload: values.mobile,
        //   })
        //     .then(resolve)
        //     .catch(reject);
        // }
      });
    });



  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    console.log(values);

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


    if (!err) {
      // const { dispatch } = this.props;
      // dispatch({
      //   type: 'login/login',
      //   payload: {
      //     ...values,
      //     type,
      //   },
      // });
    }
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
    const { login, submitting } = this.props; 
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

export default LoginPage;
