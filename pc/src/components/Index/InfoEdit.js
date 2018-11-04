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
  Upload,
  TimePicker,
} from 'antd';

import styles from './BaseView.less';

const Option = Select.Option;
const FormItem = Form.Item;

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }) => (
    <Fragment>
      <div className={styles.avatar_title}>
        头像
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload fileList={[]}>
        <div className={styles.button_view}>
          <Button icon="upload">
            上传
          </Button>
        </div>
      </Upload>
    </Fragment>
  );

class InfoEdit extends PureComponent {


  renderForm() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
        <Card bordered={false} style={{ marginBottom: 24 }} loading={false}>
            <div className={styles.avatarHolder} style={{textAlign: "center"}}>
                <img alt="" src="http://image.nbd.com.cn/uploads/avatars/532975/avatar.jpg" height="100" />
            </div>

            <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
                <FormItem label="运营状态">
                    {getFieldDecorator('operation', {
                    })(
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">运营中</Radio.Button>
                            <Radio.Button value="b">关闭</Radio.Button>
                        </Radio.Group>

                    )}
                </FormItem>
                <FormItem label="运营时间">
                {getFieldDecorator('operationstart', {
                    rules: [
                    {
                        required: true,
                        message: "开始时间",
                    },
                    ],
                })(
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                )}-
                {getFieldDecorator('operationend', {
                    rules: [
                    {
                        required: true,
                        message: "结束时间",
                    },
                    ],
                })(
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                )}
                </FormItem>
                <FormItem label="店铺名称">
                {getFieldDecorator('profile', {
                    rules: [
                    {
                        required: true,
                        message: '请输入店铺名称',
                    },
                    ],
                })(<Input />)}
                </FormItem>
                <FormItem label="店铺行业">
                {getFieldDecorator('country', {
                    rules: [
                    {
                        required: true,
                        message: '请选择店铺行业',
                    },
                    ],
                })(
                    <Select style={{ maxWidth: 220 }}>
                        <Option value="China">店铺行业</Option>
                    </Select>
                )}
                </FormItem>
                <FormItem label="工种">
                {getFieldDecorator('geographic', {
                    rules: [
                    {
                        required: true,
                        message: '请选择工种',
                    },
                    ],
                })(
                    <Select style={{ maxWidth: 220 }}>
                    <Option value="China">工种是啥</Option>
                    </Select>
                )}
                </FormItem>
                <FormItem label="店铺地址">
                {getFieldDecorator('address', {
                    rules: [
                    {
                        required: true,
                        message: '请输入店铺地址',
                    },
                    ],
                })(<Input />)}
                </FormItem>
                <Button type="primary">保存</Button><Button>取消</Button>
            </Form>
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

export default Form.create()(InfoEdit);
