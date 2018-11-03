import React, { PureComponent } from 'react';
import Link from 'umi/link';
import router from 'umi/router';
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Center.less';

class Center extends PureComponent {
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent',
    });
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });
    dispatch({
      type: 'project/fetchNotice',
    });
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'recharge':
        router.push(`${match.url}/recharge`);
        break;
      case 'pay':
        router.push(`${match.url}/pay`);
        break;
      case 'reflect':
        router.push(`${match.url}/reflect`);
        break;
        case 'list':
        router.push(`${match.url}/list`);
        break;
      default:
        break;
    }
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  saveInputRef = input => {
    this.input = input;
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { state } = this;
    const { inputValue } = state;
    let { newTags } = state;
    if (inputValue && newTags.filter(tag => tag.label === inputValue).length === 0) {
      newTags = [...newTags, { key: `new-${newTags.length}`, label: inputValue }];
    }
    this.setState({
      newTags,
      inputVisible: false,
      inputValue: '',
    });
  };

  render() {
    const { newTags, inputVisible, inputValue } = this.state;
    const {
      listLoading,
      currentUser,
      currentUserLoading,
      project: { notice },
      projectLoading,
      match,
      location,
      children,
    } = this.props;

    const operationTabList = [
      {
        key: 'recharge',
        tab: (
          <span>
            账户充值 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'pay',
        tab: (
          <span>
            缴纳保证金 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'reflect',
        tab: (
          <span>
            余额提现 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'list',
        tab: (
          <span>
            费用清单 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      }
    ];

    return (
      <GridContent className={styles.userCenter}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={currentUserLoading}>
              {currentUser && Object.keys(currentUser).length ? (
                <div>
                  <div className={styles.accountEdit}>
                    <div>编辑</div>
                  </div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentUser.avatar} />
                    <div className={styles.name}>{currentUser.name}</div>
                    <div>{currentUser.operation}|{currentUser.operationTime}|账户：{currentUser.account}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.title} />
                      工种：{currentUser.types}
                    </p>
                    <p>
                      <i className={styles.group} />
                      店铺行业：{currentUser.industry}
                    </p>
                    <p>
                      <i className={styles.address} />
                      店铺地址：{currentUser.address}
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>营业执照</div>
                    {currentUser.licenses.map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed />
                </div>
              ) : (
                'loading...'
              )}
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={location.pathname.replace(`${match.path}/`, '')}
              onTabChange={this.onTabChange}
              loading={listLoading}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Center;
