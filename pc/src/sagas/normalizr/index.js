import { normalize, schema } from 'normalizr';
// import lodashmap from 'lodash.map';
// import lodashget from 'lodash.get';
// Define a users schema
const productinfo = new schema.Entity('products',{},{
  idAttribute: '_id',
});

const orderinfo = new schema.Entity('orders',{},{
  idAttribute: '_id',
});

const productinfoListSchma = {docs:[productinfo]};
const normalizr_productinfo =(resultlist)=>{
  const {entities}= normalize(resultlist, productinfoListSchma);
  return entities;
};


const orderinfoListSchma = {docs:[orderinfo]};
const normalizr_orderinfo =(resultlist)=>{
  const {entities}= normalize(resultlist, orderinfoListSchma);
  return entities;
};


export {
  normalizr_productinfo,
  normalizr_orderinfo
};
