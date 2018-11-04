import React, { Component } from 'react';
import { Admin, Resource } from "react-admin";

import dataProvider from './dataProvider.js';
import authProvider from './authProvider.js';
// import logo from './logo.svg';
import './App.css';
import sagas from './sagas';
//import Login from './Login';
//import Layout from './Layout.js';
import Menu from './menu';
import { reducer as tree } from 'ra-tree-ui-materialui';
import { Dashboard } from './components/dashboard';
//import CustomRoutes from './routes';
import translations from './i18n';
import singledocumentpage from './components/singledocumentpage/reducer';
import systemconfigreducer from './components/systemconfig/reducer';
//import themeReducer from './themeReducer.js';
//import menu from './menu/reducer';

import Widgets from '@material-ui/icons/Widgets' //系统设置
import { SystemconfigList } from './components/systemconfig/index.js';
import {AddressconstCreate,AddressconstList,AddressconstEdit} from './components/addressconst';
// import {CategorylistCreate,CategorylistList,CategorylistEdit} from './components/category/index.js';
import {ProductlistCreate,ProductlistList,ProductlistEdit} from './components/product/index.js';
import {ExpresslistCreate,ExpresslistList,ExpresslistEdit} from './components/express/index.js';
import {BannerlistCreate,BannerlistList,BannerlistEdit} from './components/banner/index.js';
import {TopiclistList,TopiclistEdit} from './components/topic/index.js';
import {TopiccommentlistList,TopiccommentlistEdit} from './components/topiccomment/index.js';
// import {FeedbackList,FeedbackShow} from './components/feedback/index.js';
// import {CouponlistList,CouponlistCreate,CouponlistEdit,CouponlistShow} from './components/coupon/index.js';
import {UserlistList,UserlistEdit} from './components/user/index.js';
import {ShopList,ShopEdit,ShopCreate} from './components/shop/index.js';
import {TypeofworkCreate,TypeofworkList,TypeofworkEdit,} from './components/typeofwork/index.js';
import {AboutlistList,AboutlistEdit,AboutlistCreate} from './components/abouts/index.js';
import {CategoriesList,CategoriesCreate,CategoriesEdit,} from './components/category';
import {PostageTemplatelistCreate,PostageTemplatelistList,PostageTemplatelistEdit} from './components/postagetemplate';
import {DevicelistList,DevicelistEdit} from './components/device/index';

const i18nProvider = locale => translations[locale];


class App extends Component {
  render() {
    return (
      <Admin dataProvider = {dataProvider}
      title = "爱上门APP管理后台"
      authProvider = {authProvider}
      customReducers = {{
        tree,
        systemconfig: systemconfigreducer,
        singledocumentpage,
      }}
      customSagas = {sagas}
      menu={Menu}
      dashboard = {Dashboard}
      locale = "cn"
      i18nProvider = {i18nProvider}
      >
      {
        permissions =>{
          return [
            <Resource name="systemconfig" icon={Widgets} list={SystemconfigList} />,
            <Resource name="addressconst"  icon={Widgets} list={AddressconstList} edit={AddressconstEdit} create={AddressconstCreate}  />,
            <Resource name="postagetemplate"  icon={Widgets} list={PostageTemplatelistList} edit={PostageTemplatelistEdit}  create={PostageTemplatelistCreate}  />,
            <Resource name="product"  icon={Widgets} list={ProductlistList} edit={ProductlistEdit} create={ProductlistCreate}  />,
            <Resource name="category" icon={Widgets}  list={CategoriesList} edit={CategoriesEdit} create={CategoriesCreate} />,
            <Resource name="express"  icon={Widgets} list={ExpresslistList} edit={ExpresslistEdit}  create={ExpresslistCreate}  />,
            <Resource name="banner"  icon={Widgets} list={BannerlistList} edit={BannerlistEdit}  create={BannerlistCreate}  />,
            <Resource name="topic"  icon={Widgets} list={TopiclistList} edit={TopiclistEdit}  />,
            <Resource name="comments"  icon={Widgets} list={TopiccommentlistList} edit={TopiccommentlistEdit}  />,
            <Resource name="user"  icon={Widgets} list={UserlistList} edit={UserlistEdit}  />,
            <Resource name="shop"  icon={Widgets} list={ShopList} edit={ShopEdit}  create={ShopCreate} />,
            <Resource name="typeofwork"  icon={Widgets} list={TypeofworkList} edit={TypeofworkEdit}  create={TypeofworkCreate} />,
            <Resource name="device"  icon={Widgets} list={DevicelistList} edit={DevicelistEdit}  />,
            <Resource name="about"  icon={Widgets} list={AboutlistList} edit={AboutlistEdit}  create={AboutlistCreate}  />
        ]}
      }
      </Admin>
    );
  }
}

export default App;
