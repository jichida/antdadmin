import React, { PureComponent } from 'react';
import { Card, Button, Icon, List } from 'antd';
import { withRouter } from 'react-router-dom';
import Ellipsis from '../Ellipsis';

import styles from './CardList.module.less';

class CommodityList extends PureComponent {

  onAddProduct = ()=>{
    this.props.history.push("/productadd");
  }

  render() {
    const list = [{
      id: 1,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description: "升级加强版；银色；官方标配",
      stock: 890
    },
    {
      id: 2,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description:"升级加强版；银色；官方标配",
    },
    {
      id: 3,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description:"升级加强版；银色；官方标配",
    },
    {
      id: 4,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description:"升级加强版；银色；官方标配",
    },
    {
      id: 5,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description:"升级加强版；银色；官方标配",
    },
    {
      id: 6,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description:"升级加强版；银色；官方标配",
    },];

    return (
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={false}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className={styles.card} actions={[ <a>编辑</a>, <a style={{color: "red"}}>删除</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} height="36" />}
                      title={<a>{item.title}</a>}
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
        </div>
    );
  }
}

export default withRouter(CommodityList);
