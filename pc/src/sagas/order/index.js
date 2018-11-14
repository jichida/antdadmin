import { put,takeLatest} from 'redux-saga/effects';
// import {delay} from 'redux-saga';
import {
  set_db
} from '../../actions';
// import { goBack } from 'connected-react-router';//https://github.com/reactjs/connected-react-router
// import config from '../../env/config.js';
import {page_getorder_result} from '../pagination';
import {normalizr_orderinfo} from '../normalizr';

export function* orderflow() {


  yield takeLatest(`${page_getorder_result}`,function*(action){
    try{
      const {payload} = action;
      const result = normalizr_orderinfo(payload.result);
      yield put(set_db(result));
    }
    catch(e){
      console.log(e);
    }
  });



}
