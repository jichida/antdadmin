import React from 'react';
import Register from './components/register';
import { Route } from 'react-router-dom';
// import Configuration from './configuration/Configuration';

export default [
   <Route exact path="/register" component={Register} noLayout />,
];
