import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { Card, Button, Icon, List } from 'antd';
import lodashmap from 'lodash.map';
import lodashget from 'lodash.get';
import { Link,withRouter } from 'react-router-dom';
import Ellipsis from '../Ellipsis';
import {set_weui} from '../../actions';
import styles from './CardList.module.less';

const listtypeiddata = {

};

class ProductList extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
        dataSource: [],
        pagination: {
          current:1,
          pageSize:props.pagenumber,
          total:1
        },
        refreshing: false,
        pos:0
      }
  }

  onChangePagination =(page, pageSize)=>{
    this.setState({
      current:page,
      pageSize
    });
    this.onAjax(this.props.query,this.props.sort,this.props.pagenumber,page);
  }
  // handleTableChange = (pagination, filters, sorter) => {
  //   const pager = { ...this.state.pagination };
  //   pager.current = pagination.current;
  //   this.setState({
  //     pagination: pager,
  //   });
  //   this.onAjax(this.props.query,this.props.sort,this.props.pagenumber,pager.current);
  // }

  onAjax(query,sort,pagenumber,page){
    let that = this;
    this.props.dispatch(this.props.queryfun({
        query: query,
        options: {
            select:this.props.select || {},
            sort: sort,
            page: page,
            limit: pagenumber,
        }
    })).then(({result})=> {
      if (that.mounted){
        let initData = [];
        if(!!result){
          lodashmap(result.docs,(item)=>{
            item = that.props.onItemConvert(item);
            initData.push(item);
          });
        }
        that.setState({
          dataSource:[...initData],
          refreshing: false,
          pagination:{
            pageSize:pagenumber,
            current:result.page,
            total:result.total,
          }
        });
      }
    }).catch((e)=>{
      this.setState({ refreshing: false });
      console.log(e);
      this.props.dispatch(set_weui({
        toast:{
        text:e,
        show: true,
        type:'warning'
      }}));
    });
  }

  // componentWillMount() {
  //
  // }
  componentWillUnmount() {
    this.mounted = false;
    let pos = lodashget(this,'refs.antdtable.scrollProperties.offset',0);
    listtypeiddata[this.props.listtypeid] = {
      dataSource:this.state.dataSource,
      pagination:this.state.pagination,
      pos:pos//document.body.scrollTop||document.documentElement.scrollTop
    };

  }

  componentDidMount() {
    this.mounted = true;
    let saveddata = listtypeiddata[this.props.listtypeid];
    if(!!saveddata && this.props.usecache){//first time
      this.setState({
        dataSource:saveddata.dataSource,
        refreshing:false,
        pagination:saveddata.pagination
      });
    }
    else{
      if(!!saveddata){
        delete listtypeiddata[this.props.listtypeid];
      }
      this.onRefresh();
    }
    // this.refs.antdtable.scrollTo(0,this.state.pos);
    // this.setState({ refreshing: true });
    // this.onAjax(this.props.query,this.props.sort,this.props.pagenumber,1);
   }
   onRefresh() {
     if(!!this.props.query){
       this.setState({ refreshing: true });
       this.onAjax(this.props.query,this.props.sort,this.props.pagenumber,1);
     }
   }

  onAddProduct = ()=>{
    console.log(this.props);
    debugger;
    this.props.history.push("/productadd");
  }

  render() {
    // const list = [{
    //   id: 1,
    //   avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    //   title: "爱上门血压仪",
    //   description: "升级加强版；银色；官方标配",
    //   stock: 890
    // },
    // {
    //   id: 2,
    //   avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    //   title: "爱上门血压仪",
    //   description:"升级加强版；银色；官方标配",
    // },
    // {
    //   id: 3,
    //   avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    //   title: "爱上门血压仪",
    //   description:"升级加强版；银色；官方标配",
    // },
    // {
    //   id: 4,
    //   avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    //   title: "爱上门血压仪",
    //   description:"升级加强版；银色；官方标配",
    // },
    // {
    //   id: 5,
    //   avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    //   title: "爱上门血压仪",
    //   description:"升级加强版；银色；官方标配",
    // },
    // {
    //   id: 6,
    //   avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
    //   title: "爱上门血压仪",
    //   description:"升级加强版；银色；官方标配",
    // },];

    return (
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={false}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...this.state.dataSource]}
            renderItem={item =>
              item ? (
                <List.Item key={item._id}>
                  <Card hoverable className={styles.card} actions={[ <Link to="">编辑</Link>, <Button style={{color: "red"}}>删除</Button>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} height="36" />}
                      title={<Link to="">{item.name}</Link>}
                      description={
                        <React.Fragment>
                          <Ellipsis className={styles.item} lines={3}>
                            {item.description}<br />
                            库存：{item.stock}
                          </Ellipsis>
                          <h2 style={{color: "red", position: "absolute", top: "50%", right: 10}}>￥：518</h2>
                        </React.Fragment>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton} style={{height: 188}} onClick={()=>{this.onAddProduct()}}>
                    <Icon type="plus" /> 新增新产品
                  </Button>
                </List.Item>
              )
            }
          />

          {
            this.state.pagination.total > this.state.pagination.pageSize &&
              (<Pagination key={'div1'} defaultCurrent={1}
                          total={this.state.pagination.total}
                          current={this.state.pagination.current}
                          pageSize={this.state.pagination.pageSize}
                          onChange={this.onChangePagination}
                        />)
          }
        </div>
    );
  }
}

ProductList = withRouter(ProductList);
export default connect()(ProductList);
