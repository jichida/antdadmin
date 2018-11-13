import { normalize, schema } from 'normalizr';
// import lodashmap from 'lodash.map';
// import lodashget from 'lodash.get';
// Define a users schema
const productinfo = new schema.Entity('products',{},{
  idAttribute: '_id',
});

const productinfoListSchma = {docs:[productinfo]};
const normalizr_productinfo =(resultlist)=>{
  const {entities}= normalize(resultlist, productinfoListSchma);
  return entities;
};

export {
  normalizr_productinfo,
};
