import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';


import Index from '../Pages/Production/AddForm';

// import Login from './login/login';

import {requireAuthentication} from './requireauthentication';

class AppRoot extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }
    render() {
      return (
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Index} />

                  </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
