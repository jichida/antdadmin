import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const breadcrumbNameMap = {
  '/account': '个人页',
  '/ccount/recharge': '余额充值',
  '/account/pay': '缴纳保证金',
  '/account/reflect': '余额提现',
  '/account/costlist': '费用清单',
  '/product': '产品管理',
  '/product/commodity': '商品',
  '/product/service': '服务',
  '/productadd': '添加新商品',
  '/order': '订单管理',
  '/order/pendingpay': '待付款',
  '/order/pendingsend': '待发货',
  '/order/delivered': '已发货',
  '/order/completed': '已完成',
  '/order/refund': '退款/退货退款',
  '/order/sendout': '订单发货',
  '/order/track': '快递跟踪',
};
const Breadcrumbs = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);

  return (
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
  );
});

export default Breadcrumbs;
