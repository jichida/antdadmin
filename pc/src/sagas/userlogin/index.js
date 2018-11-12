import { put,takeLatest,} from 'redux-saga/effects';
// import {delay} from 'redux-saga';
import {
  common_err,
  md_login_result,
  login_result,

  register_result,
  sendauth_result,
  findpwd_result,
  registerfill_result,
  set_weui,

} from '../../actions';
import { goBack,push } from 'connected-react-router';//https://github.com/reactjs/connected-react-router
import config from '../../env/config.js';

export function* userloginflow() {
  yield takeLatest(`${register_result}`, function*(action) {
    yield put(push(`/register/verify`));
  });

  yield takeLatest(`${registerfill_result}`, function*(action) {
    yield put(push(`/register/result`));
  });

  // 链接远程数据,暂时注释
  yield takeLatest(`${sendauth_result}`, function*(action) {
    try{
      let {payload:result} = action;
      yield put(set_weui({
        toast:{
        text:result.msg,
        show: true,
        type:'success'
      }}));
    }
    catch(e){
      console.log(e);
    }

  });

  yield takeLatest(`${findpwd_result}`, function*(action) {
      try{
        yield put(set_weui({
          toast:{
            text:'修改密码成功',
            show: true,
            type:'success'
        }}));
        yield put(goBack());
      }
      catch(e){
        console.log(e);
      }
  });



  yield takeLatest(`${md_login_result}`, function*(action) {
      try{
      let {payload:result} = action;
        console.log(`md_login_result==>${JSON.stringify(result)}`);
        if(!!result){
            yield put(login_result(result));
            if(result.loginsuccess){
              localStorage.setItem(`asmb2c_${config.softmode}_token`,result.token);
            }
        }

      }
      catch(e){
        console.log(e);
      }

  });


  yield takeLatest(`${common_err}`, function*(action) {
    try{
        let {payload:result} = action;

        yield put(set_weui({
          toast:{
          text:result.errmsg,
          show: true,
          type:'warning'
        }}));
      }
      catch(e){
        console.log(e);
      }
  });

}
