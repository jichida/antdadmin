import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch, Redirect } from 'react-router-dom';


import Index from './Index';
import Recharge from './Index/Recharge';
import Pay from './Index/Pay';
import Reflect from './Index/Reflect';
import ReflectDetail from './Index/ReflectDetail';
import CostList from './Index/CostList';
import InfoEdit from './Index/InfoEdit';

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

import Login from './Login/index2.js';
import BasicLayout from '../layouts/GLayout';
import Order from './Order';
import Product from './Product';


import {requireAuthentication} from './requireauthentication';

const UseLayout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<BasicLayout><Component {...props}/></BasicLayout>);
  }
  return LayoutComponent;
}

const AccountSecLayout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<Index><Component {...props}/></Index>);
  }
  return LayoutComponent;
}

const OrderSecondLayout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<Order><Component {...props}/></Order>);
  }
  return LayoutComponent;
}

const ProductSecondLayout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<Product><Component {...props}/></Product>);
  }
  return LayoutComponent;
}

class AppRoot extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }
    render() {
      return (
              <div className="container">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" render={ ()=>(<Redirect to="/account/recharge" />)} />
                  <Route exact path="/account/recharge" component={UseLayout(AccountSecLayout(Recharge))} />
                  <Route exact path="/account/pay" component={UseLayout(AccountSecLayout(Pay))} />
                  <Route exact path="/account/reflect" component={UseLayout(AccountSecLayout(Reflect))} />
                  <Route exact path="/account/reflectdetial" component={UseLayout(ReflectDetail)} />
                  <Route exact path="/account/costlist" component={UseLayout(AccountSecLayout(CostList))} />
                  <Route exact path="/account/infoedit" component={UseLayout(InfoEdit)} />
                  <Route exact path="/product" component={UseLayout(Product)} />
                  <Route exact path="/product/add" component={UseLayout(Add)} />
                  <Route exact path="/order/pendingpay" component={UseLayout(OrderSecondLayout(PendingPay))} />
                  <Route exact path="/order/pendingsend" component={UseLayout(OrderSecondLayout(PendingSend))} />
                  <Route exact path="/order/delivered" component={UseLayout(OrderSecondLayout(Delivered))} />
                  <Route exact path="/order/completed" component={UseLayout(OrderSecondLayout(Completed))} />
                  <Route exact path="/order/refund" component={UseLayout(OrderSecondLayout(Refund))} />
                  <Route exact path="/order/sendout" component={UseLayout(SendOut)} />
                  <Route exact path="/order/track" component={UseLayout(Track)} />
                </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
