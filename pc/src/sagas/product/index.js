import { put,takeLatest,race,call,take,select,fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {
  productadd_result,
  set_weui,
} from '../../actions';
import { goBack,push,replace} from 'connected-react-router';//https://github.com/reactjs/connected-react-router
// import config from '../../env/config.js';

export function* productflow() {
  yield takeLatest(`${productadd_result}`, function*(action) {
    yield put(goBack());
    yield put(set_weui({
      toast:{
      text:`新增产品成功`,
      show: true,
      type:'success'
    }}));
  });

  // yield takeLatest(`${registerfill_result}`, function*(action) {
  //   yield put(push(`/register/result`));
  // });



}
