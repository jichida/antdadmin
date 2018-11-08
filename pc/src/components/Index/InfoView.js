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

import styles from './Center.module.less';


class InfoView extends PureComponent {


  render() {
    
    const { onEnterEdit } = this.props;

    return (
      <Card bordered={false} style={{ marginBottom: 24 }} loading={false}>
          <div>
            <div className={styles.accountEdit} >
              <div><Button onClick={onEnterEdit}>编辑</Button></div>
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
);
  }
}

export default InfoView;
