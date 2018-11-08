
import React, { PureComponent } from 'react';
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input, Button } from 'antd';
import GridContent from '../PageHeaderWrapper/GridContent';
import styles from './Center.module.less';
import { withRouter } from 'react-router-dom';
import InfoView from './InfoView';
import InfoEdit from './InfoEdit';


class Dashboard extends PureComponent {

  state = {
    isEdit: false,
  }

  componentDidMount() {
  }

  onEnterEdit = () => {
    this.setState({
      isEdit: true,
    })
  }

  onEditOver = () => {
    this.setState({
      isEdit: false,
    })
  }

  onTabChange = key => {
    const { history, match } = this.props;
    switch (key) {
      case 'recharge':
        history.push(`${match.path}/recharge`);
        break;
      case 'pay':
        history.push(`${match.path}/pay`);
        break;
      case 'reflect':
        history.push(`${match.path}/reflect`);
        break;
        case 'costlist':
        history.push(`${match.path}/costlist`);
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
        key: 'costlist',
        tab: (
          <span>
            费用清单 <span style={{ fontSize: 14 }}></span>
          </span>
        ),
      }
    ];
    const aKey = location.pathname.replace(`${match.path}/`, '');
    console.log(aKey)
    return (
      <GridContent className={styles.userCenter} style={{backgroundColor: "gray"}}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
             { this.state.isEdit ?
                <InfoEdit onEditOver={this.onEditOver} /> : <InfoView onEnterEdit={this.onEnterEdit} />}
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              loading={false}
              onTabChange={this.onTabChange}
              activeTabKey={aKey}
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
