import React from 'react';
import { Button, Form, Input } from 'antd';

const FormItem = Form.Item;

class FilterForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.onSearch(values);
          }
        });
    }

    handleReset = ()=> {
        this.props.onSearch({});
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit= {this.handleSubmit}>
                <FormItem label="产品名称">
                    {
                        getFieldDecorator('name')(
                            <Input
                                style={{width:300}}
                                placeholder="请输入产品名称"
                            />
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button onClick={this.handleReset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({})(FilterForm);
