import {takeLatest,call} from 'redux-saga/effects';
import {set_weui} from '../../actions';
import { notification } from 'antd';

const popdialog = ({text,type})=>{
  return new Promise(resolve => {
      notification[type]({
         message: '提示',
         description: text,
       });
      resolve();
    });
}
export function* uiflow(){//仅执行一次
  yield takeLatest(`${set_weui}`, function*(action) {
    const {toast} = action.payload;
    if(!!toast){
      yield call(popdialog,toast);
    }
  });
}
