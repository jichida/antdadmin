import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';


import Index from './Index';

import Login from './Login/index2.js';
import BasicLayout from '../layouts/BasicLayout';
import Product from './Product';
import Order from './Order';

import {requireAuthentication} from './requireauthentication';

const UseLayout = (Component)=>{
  const LayoutComponent = (props)=>{
    return (<BasicLayout><Component {...props}/></BasicLayout>);
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
                        <Route exact path="/" component={UseLayout(Index)} />
                        <Route exact path="/product" component={UseLayout(Product)} />
                        <Route exact path="/order" component={UseLayout(Order)} />
                      </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
