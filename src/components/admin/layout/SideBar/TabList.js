import {
  Analytics,
  Category,
  Dashboard,
  Person,
  Pets,
} from '@mui/icons-material';
import React from 'react';
import TabItem from './TabItem';

const tabList = [
  {
    name: 'Tổng quan',
    icon: <Dashboard />,
    url: 'overview',
  },
  {
    name: 'Danh mục',
    icon: <Category />,
    url: 'category',
  },
  {
    name: 'Sản phẩm',
    icon: <Pets />,
    url: 'product',
  },
  {
    name: 'Đơn hàng',
    icon: <Dashboard />,
    url: 'order',
  },
  {
    name: 'Thống kê',
    icon: <Analytics />,
    url: 'analytic',
  },
  {
    name: 'Người dùng',
    icon: <Person />,
    url: 'user',
  },
];

const TabList = () => {
  return tabList.map((tab) => (
    <TabItem key={tab.url} name={tab.name} icon={tab.icon} url={tab.url} />
  ));
};

export default TabList;
