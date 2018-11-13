/**
 * Created by wangxiaoqing on 2017/3/20.
 */
import { createReducer } from 'redux-act';
import {
    //登录
    login_result,
    fillprofile_result,
    logout_result,
} from '../../actions/index.js';


const initial = {
    userlogin: {
        editusername:'',
        loginsuccess:false,
        username:'',
        userid:'',
        token:'',
        profile:{},
        invitecode:'',
        defaultaddress:{},
        balance:0,
        point:0,
        isusergetpointsigntoday:true,
        bindtype:'',
        openid:'',
        orderstatus: {},
    },
};

const userlogin = createReducer({
    [logout_result]:(state, payload)=>{
        return { ...initial.userlogin,defaultaddress:{}};
    },
    [fillprofile_result]: (state, {profile}) => {
        return { ...state, profile};
    },
    [login_result]: (state, payload) => {
        return { ...state, ...payload,loginsuccess:true};
    },
}, initial.userlogin);

export default userlogin;
