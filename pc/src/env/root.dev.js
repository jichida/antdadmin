/**
 * Created by wangxiaoqing on 2017/3/27.
 */
import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './devtools';
import store from './store';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import {history} from './store';

import AppRoot from '../components/approot.js';
import BasicLayout from '../layouts/BasicLayout';

const Root = (props)=>
    (

            <Provider store={store}>
                <BasicLayout>
                    <ConnectedRouter history={history}>
                        <Route path="/" component={AppRoot}/>
                    </ConnectedRouter>
                    <DevTools />
                </BasicLayout>
            </Provider>

    );


export default Root;
