
import React, { PureComponent } from 'react';
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input, Button } from 'antd';
import GridContent from '../PageHeaderWrapper/GridContent';
import styles from './Center.module.less';
import { withRouter } from 'react-router-dom';
console.log(styles)
class Dashboard extends PureComponent {

  componentDidMount() {
  }

  onTabChange = key => {
    const { history, match } = this.props;
    switch (key) {
      case 'recharge':
        history.push(`recharge`);
        break;
      case 'pay':
        history.push(`pay`);
        break;
      case 'reflect':
        history.push(`reflect`);
        break;
        case 'list':
        history.push(`costlist`);
        break;
      default:
        break;
    }
  };



  render() {
    const { children, location, match } = this.props;

    const operationTabList = [
      {
        key: 'recharge',
        tab: (
          <span>
            账户充值 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },
      {
        key: 'pay',
        tab: (
          <span>
            缴纳保证金 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },
      {
        key: 'reflect',
        tab: (
          <span>
            余额提现 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      },
      {
        key: 'list',
        tab: (
          <span>
            费用清单 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      }
    ];

    return (
      <GridContent className={styles.userCenter}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={false}>
                <div>
                  <div className={styles.accountEdit} >
                    <div><Button>编辑</Button></div>
                  </div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="36" />
                    <div className={styles.name}>熊猫宝宝</div>
                    <div>运营中|运营时间|账户：123456789</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.title} />
                      工种：工种
                    </p>
                    <p>
                      <i className={styles.group} />
                      店铺行业：服务
                    </p>
                    <p>
                      <i className={styles.address} />
                      店铺地址：南京
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>营业执照</div>
                    <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg"  height="36" />
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed />
                </div>
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              loading={false}
              onTabChange={this.onTabChange}
              //activeTabKey={location.pathname.replace(`${match.path}/`, '')}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default withRouter(Dashboard);
