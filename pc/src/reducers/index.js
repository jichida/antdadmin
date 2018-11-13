import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router'

import userlogin from './userlogin';
import app from './app';
import db from './db';
export default (history)=>combineReducers(
  {
    app,
    db,
    userlogin,
    form: formReducer,
    router: connectRouter(history),
  });
