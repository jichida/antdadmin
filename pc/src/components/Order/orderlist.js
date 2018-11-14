import React, { PureComponent } from 'react';
import {
  Card,
  Avatar,
} from 'antd';
// import { Link } from 'react-router-dom';
import StandardTable from '../StandardTable/antdtable';

import styles from './TableList.module.less';
import {
  callthen,page_getorder_request,page_getorder_result
} from '../../sagas/pagination';
let g_querysaved;

class OrderList extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
        query:props.query || {}
      };
      this.columns = [
          {
            title: '商品',
            dataIndex: 'commodity',
            render: ({avatar, title, description}) => (
              <Card style={{ width: 300, marginTop: 16, backgroundColor: "transparent" }} bordered={false} loading={false}>
                  <Card.Meta
                      avatar={<Avatar src={avatar} />}
                      title={title}
                      description={description}
                  />
              </Card>
            ),
          },
          {
            title: '订单号',
            dataIndex: 'orderno',
          },
          {
            title: '买家',
            dataIndex: 'buyer',
            render: ({name, phone}) => (
                <div>
                    <span>{name}</span><br /><span>{phone}</span>
                </div>
            )
          },
          {
            title: '数量',
            dataIndex: 'ordernum',
          },
          {
            title: '创建时间',
            dataIndex: 'createtime',
          },
          {
              title: '实付金额',
              dataIndex: 'money',
          },
        ];
        if(!!props.opcol) {
          this.columns.push(props.opcol);
        }
    }



  componentDidMount() {
  }
  onItemConvert(item){
    item.key = item._id;
    item.commodity = {
      id: '1',
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description: "升级加强版；银色；官方标配",
    };
    item.orderno = item._id;
    item.buyer = {
      name: "嘻嘻",
      phone: '12345678',
    };
    item.ordernum = '1';
    item.createtime = '20180101';
    item.money = '319';
    return item;
  }
  onClickRow =(record)=>{

  }
  render() {

    return (
          <div className={styles.tableList}>
            <StandardTable
              onClickRow={this.onClickRow}
              listtypeid = 'antdtableorder'
              usecache = {!!g_querysaved}
              ref='antdtablealarm'
              onItemConvert={this.onItemConvert.bind(this)}
              columns={this.columns}
              pagenumber={5}
              query={this.state.query}
              sort={{DataTime: -1}}
              queryfun={(payload)=>{
                return callthen(page_getorder_request,page_getorder_result,payload);
              }}
            />
          </div>
    );
  }
}

export default OrderList;
