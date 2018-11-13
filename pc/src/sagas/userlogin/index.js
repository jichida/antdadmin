import { put,takeLatest,race,call,take,select,fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {
  common_err,
  md_login_result,
  login_result,

  register_result,
  sendauth_result,
  findpwd_result,
  registerfill_result,
  set_weui,
  loginwithtoken_request,
  ui_authticker,
} from '../../actions';
import { goBack,push,replace} from 'connected-react-router';//https://github.com/reactjs/connected-react-router
// import config from '../../env/config.js';

export function* userloginflow() {
  yield takeLatest(`${register_result}`, function*(action) {
    try{
      const {payload:{token}} = action;
      console.log(token);
      yield put(loginwithtoken_request({token}));
    }
    catch(e){
      console.log(e);
    }
    const { response, timeout } = yield race({
       response: take(`${login_result}`),
       timeout: call(delay, 5000)
    });
    // yield put(loginwithtoken_request({token}));
    if(!!response){
      yield put(push(`/register/verify`));
    }
    else if(!!timeout){
      yield put(set_weui({
        toast:{
        text:`服务器超时`,
        show: true,
        type:'warning'
      }}));
    }

  });

  yield takeLatest(`${registerfill_result}`, function*(action) {
    yield put(push(`/register/result`));
  });

  // 链接远程数据,暂时注释
  yield takeLatest(`${sendauth_result}`, function*(action) {
    try{
      const {payload:result} = action;
      yield put(set_weui({
        toast:{
        text:result.msg,
        show: true,
        type:'success'
      }}));

      yield fork(function*(){
        let authticker = 59;
        yield put(ui_authticker({authticker}));
        while(authticker > 0){
          authticker = authticker - 1;
          yield put(ui_authticker({authticker}));
          authticker = yield select((state)=>{
            return state.app.authticker;
          });
          yield call(delay, 1000);
          console.log(authticker);
        }
      });


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
            const {loginsuccess,search} = yield select((state)=>{
              const loginsuccess = state.userlogin.success;
              const search = state.router.location.search;
              return {loginsuccess,search};
            });
            yield put(login_result(result));
            if(!loginsuccess && result.loginsuccess){
              //switch
                const fdStart = search.indexOf("?next=");
                if(fdStart === 0){
                    const redirectRoute = search.substring(6);
                    yield put(replace(redirectRoute));
                }
                else{
                    yield put(replace('/'));
                }

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
