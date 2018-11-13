import { createAction } from 'redux-act';
export const getproductinfo_request = createAction('getproductinfo_request');
export const getproductinfo_result = createAction('getproductinfo_result');

export const productadd_request =  createAction('productadd_request');
export const productadd_result = createAction('productadd_result');

export const productedit_request =  createAction('productedit_request');
export const productedit_result = createAction('productedit_result');

export const productdel_request =  createAction('productdel_request');
export const productdel_result = createAction('productdel_result');
