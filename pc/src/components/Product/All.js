import React, { PureComponent } from 'react';
import { Card } from 'antd';
import {
  callthen,page_getproduct_request,page_getproduct_result
} from '../../sagas/pagination';
import AsyncTable from './productlist.js';
import FilterForm from './FilterForm';
let g_querysaved;

class All extends PureComponent {

  state = {
    query: {},
  }

  onItemConvert(item){
    item.avatar = "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg";
    item.description = "升级加强版；银色；官方标配";
    return item;
  }

  handleSearch = (values)=> {
    this.setState({
      query: values,
    })
  }

  render() {
    const query = this.state.query;
    return (
      <React.Fragment>
      <Card style={{marginBottom: 10, marginTop: -16}}><FilterForm onSearch={this.handleSearch} /></Card>
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
      />
      </React.Fragment>
      );
  }
}

export default All;
