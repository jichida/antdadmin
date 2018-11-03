import React, { PureComponent } from 'react';
import { Card, Button, Icon, List } from 'antd';

import Ellipsis from '@/components/Ellipsis';

import styles from './CardList.less';

class CommodityList extends PureComponent {

  render() {
    const {
      list: { list },
      loading,
    } = this.props;

    return (
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className={styles.card} actions={[<a>推荐</a>, <a>编辑</a>, <a>删除</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
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

export default CommodityList;
