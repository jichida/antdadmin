import React, { PureComponent } from 'react';
import {
  callthen,page_getproduct_request,page_getproduct_result
} from '../../sagas/pagination';
import AsyncTable from './productlist.js';
let g_querysaved;

class ServiceList extends PureComponent {
  onItemConvert(item){
    item.avatar = "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg";
    item.description = "升级加强版；银色；官方标配";
    return item;
  }
  render() {
    const query = {};
    return (
      <AsyncTable
        listtypeid = 'antdtables'
        onItemConvert={this.onItemConvert.bind(this)}
        usecache = {!!g_querysaved}
        ref='refservice'
        pagenumber={this.props.pagenumber || 8}
        query={query}
        sort={{created_at: 1}}
        queryfun={(payload)=>{
          return callthen(page_getproduct_request,page_getproduct_result,payload);
        }}
      />);
  }
}

export default ServiceList;
