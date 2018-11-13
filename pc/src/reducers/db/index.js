import { createReducer } from 'redux-act';
import {
  set_db,
} from '../../actions';

const initial = {
    db: {
        products: {},
        orders:{}
    },
};


const db = createReducer({
  [set_db]:(state,payload)=>{
      const {products,orders}  = payload;

      let new_products = state.products;
      if(!!products){
        new_products = {...new_products,...products};
      }

      let new_orders = state.orders;
      if(!!orders){
        new_orders = {...new_orders,...orders};
      }

      return {...state,
        products:new_products,orders:new_orders,
      };
  },
}, initial.db);

export default db;
