import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  InputNumber,
  Upload,
  Icon,
} from 'antd';
import {  withRouter } from 'react-router-dom';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import {productadd_request,productedit_request} from '../../actions';
import lodashget from 'lodash.get';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }



class AddForms extends PureComponent {

  onClickCancel =()=>{
    this.props.history.goBack();
  }
  handleSubmit = e => {
    const { form: { validateFields },dispatch,curproduct } = this.props;
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
      const data = {
        name:values.name,
        price:values.price,
        inventory:values.stock,
        brief:values.introduce
      };
      if(!err){
        if(!!curproduct){
          dispatch(productedit_request({_id:curproduct._id,data}));
        }
        else{
          dispatch(productadd_request({data}));
        }

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
    const { submitting,curproduct } = this.props;
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
                  {getFieldDecorator('stock', {
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
                    <Select placeholder="商品类型" style={{width: 300}}>
                        <Option value="China">保健</Option>
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
                    <Select placeholder="标签" style={{width: 300}}>
                        <Option value="China">健康</Option>
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
              <Button style={{ marginLeft: 8 }} onClick={()=>{
                this.onClickCancel();
              }}>
                取消
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

const mapStateToProps = ({db},props) => {
  const id = lodashget(props,'match.params.id');
  const curproduct = lodashget(db,`products.${id}`);
  // debugger;
  return {curproduct};
};

// AddForms = withRouter(AddForms);
AddForms = connect(mapStateToProps)(withRouter(AddForms));

export default Form.create()(AddForms);
