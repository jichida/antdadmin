import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  DatePicker,
} from 'antd';
import StandardTable from '../StandardTable';

import styles from './TableList.module.less';
const { RangePicker } = DatePicker;

class Reflect extends PureComponent {
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

  onApply = () => {
    const { history } = this.props;
    history.push("/account/reflectdetail");
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
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}><h3 style={{color: "blue"}}>提现明细:</h3></Col>
          <Col md={8} sm={24} offset={8}>
            <RangePicker
              style={{ width: '100%' }}
              placeholder={[
                "起始时间",
                "截至时间",
              ]}
            />
          </Col>
        </Row>
    );
  }

  render() {

    return (
          <div className={styles.tableList}>
            <div className={styles.tableListForm} style={{marginBottom: "20px"}}>
              <Button size="large" type="primary" onClick={this.onApply} >发起申请</Button>
            </div>
            <div className={styles.tableListForm} style={{marginBottom: "10px"}}>{this.renderForm()}</div>
            <StandardTable
              loading={false}
              //data={data}
              columns={this.columns}
              onChange={this.handleStandardTableChange}
            />
          </div>
    );
  }
}

export default withRouter(Reflect);
