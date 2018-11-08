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
    //const { dispatch, form } = this.props;
    e.preventDefault();
  };
/*
  handleUpload = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
*/
  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;

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
                  {getFieldDecorator('name', {
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
                  {getFieldDecorator('name', {
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
                  {getFieldDecorator('name', {
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
              {getFieldDecorator('goal', {
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
              {getFieldDecorator('goal', {
                rules: [
                  {
                    required: true,
                    message: "请上传商品图片",
                  },
                ],
              })(
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  uploadButton
                  {/* {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton} */}
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
