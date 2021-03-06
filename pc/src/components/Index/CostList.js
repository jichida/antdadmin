import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Form,
  DatePicker,

} from 'antd';
import StandardTable from '../StandardTable';

import styles from './TableList.module.less';
const { RangePicker } = DatePicker;

class CostList extends PureComponent {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };

  columns = [
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '类型',
      dataIndex: 'type',
    },
    {
      title: '备注',
      dataIndex: 'remarks',
    },
    {
      title: '费用',
      dataIndex: 'cost',
    },
    {
      title: '余额',
      dataIndex: 'balance',
    },
  ];

  componentDidMount() {
  }
  /*
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

  };



  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      this.setState({
        formValues: values,
      });

    });
  };
  */

  renderForm() {
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
              <RangePicker
                style={{ width: '100%' }}
                placeholder={[
                  "起始时间",
                  "截至时间",
                ]}
              />             
          </Col>
        </Row>
      </Form>
    );
  }

  render() {

    return (
          <div className={styles.tableList}>
            <div className={styles.tableListForm} style={{marginBottom:10}}>{this.renderForm()}</div>
              <StandardTable
                loading={false}
                columns={this.columns}
              /> 
          </div>
    );
  }
}

export default CostList;
