import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Col,
  Row,
  Input,
} from 'antd';
import FooterToolbar from '../FooterToolbar';
import PageHeaderWrapper from '../PageHeaderWrapper';
import styles from './style.module.less';

class SendOut extends PureComponent {
  state = {
    width: '100%',
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }


  resizeFooterToolbar = () => {
    requestAnimationFrame(() => {
      const sider = document.querySelectorAll('.ant-layout-sider')[0];
      if (sider) {
        const width = `calc(100% - ${sider.style.width})`;
        const { width: stateWidth } = this.state;
        if (stateWidth !== width) {
          this.setState({ width });
        }
      }
    });
  };

  handleSubmit = e => {
    const { form: { validateFields } } = this.props;
    validateFields((err, values)=>{
      console.log(values);

      // 订单发货
      //   values: {
      //     sname: 发货人
      //     sphone: 手机号
      //     spostal: 邮政编码
      //     saddress: 商家地址
      //     rname: 收货人
      //     rphone: 手机号
      //     rpostal: 邮政编码
      //     raddress: 买家地址
      //     logisticsname: 物流公司
      //     logisticsid: 物流单号
      //   }

      if(!err){
        //
      }
    })
  };

  render() {
    const {
      form: { getFieldDecorator },
      submitting,
    } = this.props;

    return (
      <PageHeaderWrapper
        title="订单发货"
        wrapperClassName={styles.dvancedForm}
      >
      <Form layout="vertical" hideRequiredMark>
        <Card title="商家信息" className={styles.card} bordered={false} headStyle={{backgroundColor: "#dcdddd"}}>
          
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label="发货人">
                  {getFieldDecorator('sname', {
                    rules: [{ required: true, message: '请输入发货人' }],
                  })(<Input placeholder="请输入发货人" />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label="手机号码">
                  {getFieldDecorator('sphone', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(<Input placeholder="请输入手机号码" />)}
                </Form.Item>              
            </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label="邮政编码">
                  {getFieldDecorator('spostal', {
                    rules: [{ required: true, message: '请输入邮政编码' }],
                  })(<Input placeholder="请输入邮政编码" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                 <Form.Item label="商家地址">
                  {getFieldDecorator('saddress', {
                    rules: [{ required: true, message: '请输入商家地址' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
        </Card>
        <Card title="买家信息" className={styles.card} bordered={false} headStyle={{backgroundColor: "#dcdddd"}}>
             <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label="收货人">
                  {getFieldDecorator('rname', {
                    rules: [{ required: true, message: '请输入发货人' }],
                  })(<Input placeholder="请输入发货人" />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label="手机号码">
                  {getFieldDecorator('rphone', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(<Input placeholder="请输入手机号码" />)}
                </Form.Item>              
            </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label="邮政编码">
                  {getFieldDecorator('rpostal', {
                    rules: [{ required: true, message: '请输入邮政编码' }],
                  })(<Input placeholder="请输入邮政编码" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                 <Form.Item label="买家地址">
                  {getFieldDecorator('raddress', {
                    rules: [{ required: true, message: '请输入买家地址' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
        </Card>
        <Card title="物流信息" className={styles.card} bordered={false}  headStyle={{backgroundColor: "#dcdddd"}}>
             <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                    <Form.Item label="物流公司">
                        {getFieldDecorator('logisticname', {
                        rules: [{ required: true, message: '请输入物流公司' }],
                        })(<Input placeholder="请输入物流公司" />)}
                    </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                    <Form.Item label="物流单号">
                         {getFieldDecorator('logisticid', {
                          rules: [{ required: true, message: '请输入物流单号' }],
                         })(<Input placeholder="请输入物流单号" />)}
                    </Form.Item>              
             </Col>
            </Row>
          
        </Card>
        
        <FooterToolbar style={{ marginTop: "10px", textAlign: "center" }}>
          <Button type="primary" onClick={this.handleSubmit} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
        </Form>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(SendOut);
