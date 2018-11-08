import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch, Redirect } from 'react-router-dom';

import Index from './Index';
import Recharge from './Index/Recharge';
import Pay from './Index/Pay';
import Reflects from './Index/Reflect';
import ReflectDetail from './Index/ReflectDetail';
import CostList from './Index/CostList';

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
import RegisterStep1 from './User/StepForm/Step1';
import RegisterStep2 from './User/StepForm/Step2';
import RegisterStep3 from './User/StepForm/Step3';

const Layout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<BasicLayout><Component {...props}/></BasicLayout>);
  }
  return LayoutComponent;
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
                    <Route path="/account" render={()=>(
                        <IndexLayout>
                          <Route path="/account/recharge" component={Recharge}/>
                          <Route path="/account/pay" Component={Pay}/>
                          <Route path="/account/reflect" Component={Reflects}/>
                          <Route path="/account/reflectdetail" Component={ReflectDetail}/>
                          <Route path="/account/costlist" Component={CostList}/>
                        </IndexLayout>
                    )} />
                    <Route path="/product" render={()=>
                      <ProductLayout>
                        <Route path="/product/commodity" component={Commodity}/>
                        <Route path="/product/service" component={Service}/>
                      </ProductLayout>
                    }/>
                    <Route path="/productadd" component={Layout(Add)} />
                    <Route path="/order" render={()=>
                      <OrderLayout>
                        <Route path="/order/pendingpay" component={PendingPay} />
                        <Route path="/order/pendingsend" component={PendingSend} />
                        <Route path="/order/delivered" component={Delivered} />
                        <Route path="/order/completed" component={Completed} />
                        <Route path="/order/refund" component={Refund} />
                      </OrderLayout>
                    }/>
                    <Route path="/order/sendout" component={Layout(SendOut)} />
                    <Route path="/order/track" component={Layout(Track)} />
                    {/* 登录、注册 */}
                    <Route path="/login" component={LoginLayout(Login)} />
                    <Route path="/register" render={()=>
                      <RegisterLayout>
                        <Route path="/register/step1" component={RegisterStep1}/>
                        <Route path="/register/step2" component={RegisterStep2}/>
                        <Route path="/register/step3" component={RegisterStep3}/>
                      </RegisterLayout>
                    }/>
                </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
