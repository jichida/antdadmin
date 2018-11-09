import React, { PureComponent } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  InputNumber,
  Upload,
} from 'antd';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }


function beforeUpload(file) {/*
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;*/
}

class AddForms extends PureComponent {

  handleSubmit = e => {
    const { form: { validateFields } } = this.props;
    validateFields((err, values)=>{
      console.log(values);

      // values: { 商品
      //   name: 名称
      //   price: 价格
      //   stock: 库存
      //   type: 类型
      //   tabs: 标签
      //   introduce: 介绍
      //   picture: 图片
      // }

      if(!err){
        //
      }
    })
  };

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  
  render() {
    const { submitting } = this.props;
    const { form: { getFieldDecorator } } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper title="增加新商品" >
        <Card bordered={false} >
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8}}>
                <FormItem {...formItemLayout} label="商品名称">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: "请输入商品名称",
                      },
                    ],
                  })(<Input style={{width: 300}} />)}
                </FormItem>
                <FormItem {...formItemLayout} label="商品价格">
                  {getFieldDecorator('price', {
                    rules: [
                      {
                        required: true,
                        message: "请输入商品价格",
                      },
                    ],
                  })(<InputNumber style={{width: 300}} />)}
                </FormItem>
                <FormItem {...formItemLayout} label="商品库存">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: "请输入商品库存",
                      },
                    ],
                  })(<InputNumber style={{width: 300}} />)}
                </FormItem>
                <FormItem {...formItemLayout} label="商品类型">
                  {getFieldDecorator('type', {
                    rules: [
                      {
                        required: true,
                        message: "请输入商品类型",
                      },
                    ],
                  })(
                    <Select style={{width: 300}}>
                        <Option value="China">商品类型</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem {...formItemLayout} label="商品标签">
                  {getFieldDecorator('tabs', {
                    rules: [
                      {
                        required: true,
                        message: "请输入商品标签",
                      },
                    ],
                  })(
                    <Select style={{width: 300}}>
                        <Option value="China">保健</Option>
                    </Select>
                  )}
                </FormItem>
            <FormItem {...formItemLayout} label="商品介绍">
              {getFieldDecorator('introduce', {
                rules: [
                  {
                    required: true,
                    message: "请输入商品介绍",
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder={"商品介绍..."}
                  rows={4}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="商品图片">
              {getFieldDecorator('picture', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button style={{ width: 100, height: 100}}>
                    <Icon type="plus" theme="outlined" /> 图片
                  </Button>
                </Upload>
              )}
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                确认发布
              </Button>
              <Button style={{ marginLeft: 8 }}>
                取消
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(AddForms);
