import { createAction } from 'redux-act';
export const getproductinfo_request = createAction('getproductinfo_request');
export const getproductinfo_result = createAction('getproductinfo_result');

export const productadd_request =  createAction('productadd_request');
export const productadd_result = createAction('productadd_result');

export const productedit_request =  createAction('productedit_request');
export const productedit_result = createAction('productedit_result');

export const productdel_request =  createAction('productdel_request');
export const productdel_result = createAction('productdel_result');

export const orderedit_request =  createAction('orderedit_request');
export const orderedit_result = createAction('orderedit_result');

export const trackorder_request =  createAction('trackorder_request');
export const trackorder_result = createAction('trackorder_result');
//获取固定的信息，比如：标签、工种、快递、设备类型
export const getconstinfo_request = createAction('getconstinfo_request');
export const getconstinfo_result = createAction('getconstinfo_result');
