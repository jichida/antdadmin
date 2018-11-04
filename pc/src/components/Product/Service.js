import React, { PureComponent } from 'react';
import { Card, Button, Icon, List } from 'antd';

import Ellipsis from '../../components/Ellipsis';

import styles from './CardList.less';

class ServiceList extends PureComponent {

  render() {
    const list = [{
      id: 1,
      avatar: "http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg",
      title: "爱上门血压仪",
      description: "升级加强版；银色；官方标配",
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
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className={styles.card} actions={[<a>推荐</a>, <a>编辑</a>, <a>删除</a>]}>
                  <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} height="36" />}
                      title={<a>{item.title}</a>}
                      description={
                        <React.Fragment>
                          <Ellipsis className={styles.item} lines={3}>
                            {item.description}
                          </Ellipsis>
                          <h2 style={{float: "right", color: "red"}}>￥：518</h2>
                        </React.Fragment>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <Icon type="plus" /> 新增产品
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
    );
  }
}

export default ServiceList;
