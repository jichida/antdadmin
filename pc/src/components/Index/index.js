
import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd';
import GridContent from '../PageHeaderWrapper/GridContent';
import styles from './Center.module.less';
import { withRouter } from 'react-router-dom';
import InfoView from './InfoView';
import InfoEdit from './InfoEdit';
import Recharge from './Recharge';
import Pay from './Pay';
import Reflects from './Reflect';
import ReflectDetail from './ReflectDetail';
import CostList from './CostList';

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
    const { history } = this.props;
    switch (key) {
      case 'recharge':
        history.replace(`/recharge`);
        break;
      case 'pay':
        history.replace(`/account/pay`);
        break;
      case 'reflect':
        history.replace(`/account/reflect`);
        break;
      case 'costlist':
        history.replace(`/account/costlist`);
        break;
      default:
        break;
    }
  };



  render() {
    const {location } = this.props;

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
    const aKey = location.pathname.replace(`/account/`, '');
    console.log(aKey);
    let Co;
    if(aKey === 'recharge'){
      Co = <Recharge />
    }
    if(aKey === 'pay'){
      Co = <Pay />
    }
    if(aKey === 'reflect'){
      Co = <Reflects />
    }
    if(aKey === 'reflectdetail'){
      Co = <ReflectDetail />
    }
    if(aKey === 'costlist'){
      Co = <CostList />
    }
    return (
      <GridContent className={styles.userCenter} style={{backgroundColor: "gray"}}>
        <Row gutter= {24}>
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
              {Co}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default withRouter(Dashboard);
