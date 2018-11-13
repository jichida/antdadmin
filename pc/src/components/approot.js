import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch, Redirect } from 'react-router-dom';

import Index from './Index';

import Completed from './Order/Completed';
import Delivered from './Order/Delivered';
import PendingPay from './Order/PendingPay';
import PendingSend from './Order/PendingSend';
import Refund from './Order/Refund';
import Track from './Order/Track';
import SendOut from './Order/SendOut';

import Commodity from './Product/Commodity';
import Service from './Product/Service';
import Add from './Product/AddForm';


import BasicLayout from '../layouts/GLayout';
import UserLayout from '../layouts/UserLayout';
import Order from './Order';
import Product from './Product';


import {requireAuthentication} from './requireauthentication';
import Login from './User/Login';
import Register from './User/Register';
import RegisterInfo from './User/Step1';
import RegisterVerify from './User/Step2';
import RegisterResult from './User/Step3';

const Layout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<BasicLayout><Component {...props}/></BasicLayout>);
  }
  return requireAuthentication(LayoutComponent);
}

const IndexLayout = Layout(Index);
const ProductLayout = Layout(Product);
const OrderLayout = Layout(Order);

const LoginLayout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<UserLayout><Component {...props}/></UserLayout>);
  }
  return LayoutComponent;
}

const RegisterLayout = LoginLayout(Register);


class AppRoot extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }//
    render() {
      return (
              <div className="container">
                <Switch>
                    <Route exact path="/" render={()=>(<Redirect to="/account/recharge" />)}/>
                    <Route path="/account/:param" component={IndexLayout} />
                    <Route path="/product" render={()=>
                      <ProductLayout>
                        <Route path="/product/commodity" component={Commodity}/>
                        <Route path="/product/service" component={Service}/>
                      </ProductLayout>
                    }/>
                    <Route path="/productedit/:id" component={Layout(Add)} />
                    <Route path="/order" render={()=>
                      <OrderLayout>
                        <Route path="/order/pendingpay" component={PendingPay} />
                        <Route path="/order/pendingsend" component={PendingSend} />
                        <Route path="/order/delivered" component={Delivered} />
                        <Route path="/order/completed" component={Completed} />
                        <Route path="/order/refund" component={Refund} />
                      </OrderLayout>
                    }/>
                    <Route path="/sendout" component={Layout(SendOut)} />
                    <Route path="/track" component={Layout(Track)} />
                    {/* 登录、注册 */}
                    <Route path="/login" component={LoginLayout(Login)} />
                    <Route path="/register" render={()=>
                      <RegisterLayout>
                        <Route exact path="/register" render={()=>(<Redirect to="/register/info" />)}/>
                        <Route path="/register/info" component={RegisterInfo}/>
                        <Route path="/register/verify" component={RegisterVerify}/>
                        <Route path="/register/result" component={RegisterResult}/>
                      </RegisterLayout>
                    }/>
                </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
