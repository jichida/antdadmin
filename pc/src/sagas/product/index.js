import { put,takeLatest} from 'redux-saga/effects';
// import {delay} from 'redux-saga';
import {
  productadd_result,
  productedit_result,
  // productdel_result,
  set_weui,
  set_db
} from '../../actions';
import { goBack } from 'connected-react-router';//https://github.com/reactjs/connected-react-router
// import config from '../../env/config.js';
import {page_getproduct_result} from '../pagination';
import {normalizr_productinfo} from '../normalizr';

export function* productflow() {
  yield takeLatest(`${productadd_result}`, function*(action) {
    try{
      yield put(goBack());
      yield put(set_weui({
        toast:{
        text:`新增产品成功`,
        show: true,
        type:'success'
      }}));
    }
    catch(e){
      console.log(e);
    }

  });

  yield takeLatest(`${productedit_result}`, function*(action) {
    try{
      yield put(goBack());
      yield put(set_weui({
        toast:{
        text:`编辑产品成功`,
        show: true,
        type:'success'
      }}));
    }
    catch(e){
      console.log(e);
    }

  });

  // yield takeLatest(`${productdel_result}`, function*(action) {
  //   try{
  //     yield put(set_weui({
  //       toast:{
  //       text:`删除品成功`,
  //       show: true,
  //       type:'success'
  //     }}));
  //     //刷新本页面
  //     // yield put(replace('/product/commodity'))
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  //
  // });

  yield takeLatest(`${page_getproduct_result}`,function*(action){
    try{
      const {payload} = action;
      const result = normalizr_productinfo(payload.result);
      yield put(set_db(result));
    }
    catch(e){
      console.log(e);
    }
  });



}
