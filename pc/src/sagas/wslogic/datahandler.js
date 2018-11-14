import {
    common_err,

    loginwithtoken_request,
    loginwithauth_request,
    login_request,
    md_login_result,

    register_request,
    register_result,
    registerfill_request,
    registerfill_result,

    sendauth_request,
    sendauth_result,

    logout_request,
    logout_result,

    getsystemconfig_request,
    getsystemconfig_result,

    getproductinfo_request,
    getproductinfo_result,

    productadd_request,
    productadd_result,
    productedit_request,
    productedit_result,
    productdel_request,
    productdel_result,

    orderedit_request,
    orderedit_result,

    trackorder_request,
    trackorder_result,

    getconstinfo_request,
    getconstinfo_result
  } from '../../actions';

import {
  page_getproduct_request,
  page_getproduct_result,
  page_getorder_request,
  page_getorder_result
} from '../pagination';
//接收的对应关系
const recvmessagetoresultpair = {
  'getconstinfo_result':getconstinfo_result,
  'trackorder_result':trackorder_result,
  'orderedit_result':orderedit_result,
  'page_getorder_result':page_getorder_result,
  'common_err':common_err,
  'productadd_result':productadd_result,
  'productedit_result':productedit_result,
  'productdel_result':productdel_result,
  'registerfill_result':registerfill_result,
  'register_result':register_result,
  'sendauth_result':sendauth_result,
  'login_result':md_login_result,
  'logout_result':logout_result,
  'getsystemconfig_result':getsystemconfig_result,
  'page_getproduct_result':page_getproduct_result,
  'getproductinfo_result':getproductinfo_result,
};

//非验证发送接口
const sendmessagefnsz = {
  'getconstinfo':`${getconstinfo_request}`,
  'register':`${register_request}`,
  'logout':`${logout_request}`,
  'loginwithauth':`${loginwithauth_request}`,
  'loginwithtoken':`${loginwithtoken_request}`,
  'login':`${login_request}`,
  'sendauth':`${sendauth_request}`,
  'getsystemconfig':`${getsystemconfig_request}`,

};

//验证发送接口
const sendmessageauthfnsz = {
  'trackorder':`${trackorder_request}`,
  'orderedit':`${orderedit_request}`,
  'registerfill':`${registerfill_request}`,
  'productadd':`${productadd_request}`,
  'productedit':`${productedit_request}`,
  'productdel':`${productdel_request}`,
  'page_getproduct':`${page_getproduct_request}`,
  'page_getorder':`${page_getorder_request}`,
  'getproductinfo':`${getproductinfo_request}`
};

export default {recvmessagetoresultpair,sendmessagefnsz,sendmessageauthfnsz};
