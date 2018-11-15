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

const init = {
  name: '门锁',
  price: 200,
  stock: 368,
  type: '上门',
  tabs: ['安装','开锁'],
  introduce: '上门开锁、安装',
  picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542253931555&di=bc974fafa66bc7bdd752c93db9e401d8&imgtype=0&src=http%3A%2F%2Ft2.58cdn.com.cn%2Fbidding%2Fbig%2Fn_v1bj3gzseh7javs636qesq.jpg',
}

const RenderForm = Form.create({
  mapPropsToFields(props) {
      return {
          name: Form.createFormField({
              value: props.name,
          }),
          price: Form.createFormField({
              value: props.price,
          }),
          stock: Form.createFormField({
              value: props.stock,
          }),
          type: Form.createFormField({
              value: props.type,
          }),
          tabs: Form.createFormField({
              value: props.tabs,
          }),
          introduce: Form.createFormField({
              value: props.introduce,
          }),
          picture: Form.createFormField({
              value: props.picture,
          }),
  };
}
})((props)=>{
  const { getFieldDecorator } = props.form;
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

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  const handleSubmit = e => {
    const { form: { validateFields },onClickSubmit } = props;
    validateFields(onClickSubmit);
  };

  return (
    <Form onSubmit={handleSubmit} hideRequiredMark style={{ marginTop: 8}}>
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
              <Option value="上门">上门换锁</Option>
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
          <Select mode="multiple" placeholder="标签" style={{width: 300}}>
              <Option value="健康">健康</Option>
              <Option value="安装">安装</Option>
              <Option value="开锁">开锁</Option>
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
      {/* <FormItem {...formItemLayout} label="商品图片">
        {getFieldDecorator('picture', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
        })(
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button style={{ width: 100, height: 100}}>
              <Icon type="plus" theme="outlined" /> 图片
            </Button>
          </Upload>
        )}
      </FormItem> */}
      <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
        <Button type="primary" htmlType="submit" loading={props.submitting}>
          确认发布
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={()=>{
          props.onClickCancel();
        }}>
          取消
        </Button>
      </FormItem>
    </Form>

  );
})



class AddForms extends PureComponent {

  onClickCancel =()=>{
    this.props.history.goBack();
  }
  onClickSubmit = (err, values)=>{
    const {dispatch,curproduct} = this.props;
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
      name: values.name,
      price: values.price,
      stock: values.stock,
      type: values.type,
      tabs: values.tabs,
      introduce: values.introduce,
      picture: values.picture,
    };
    if(!err){
      if(!!curproduct){
        dispatch(productedit_request({_id:curproduct._id,data}));
      }
      else{
        dispatch(productadd_request({data}));
      }
    }
  };


  render() {
    const { submitting,curproduct } = this.props;

    return (
      <PageHeaderWrapper title="增加新商品" >
        <Card bordered={false} >
          <RenderForm {...init}
            onClickSubmit={this.onClickSubmit}
            onClickCancel={this.onClickCancel}
            submitting={submitting}
            curproduct={curproduct}
          />
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

export default connect(mapStateToProps)(withRouter(AddForms));;
