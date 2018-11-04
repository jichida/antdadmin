import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';


class InfoView extends PureComponent {


  renderForm() {
    return (
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
    );
  }

  render() {
    return (
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
          </div>
    );
  }
}

export default InfoView;
