import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from '@mui/icons-material';
import StyleGrid from '../../UI/StyleGrid/StyleGrid';
import { OrderContext } from '../../../store/admin/order-context';
const OrderGrid = () => {
  const orderCtx = useContext(OrderContext);
  const { handleChangeEditOrder, searchOrders } = orderCtx;
  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
    },
    {
      field: 'customerName',
      headerName: 'Tên khách hàng',
      width: 200,
      editable: false,
    },
    {
      field: 'total',
      headerName: 'Tổng cộng',
      width: 100,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Tình trạng',
      width: 200,
      editable: false,
    },
    {
      field: 'paymentType',
      headerName: 'Phương thức thanh toán',
      width: 200,
      editable: false,
    },
    {
      field: 'address',
      headerName: 'Địa chỉ',
      width: 200,
      editable: false,
    },
    {
      field: 'district',
      headerName: 'Quận, huyện',
      width: 140,
      editable: false,
    },
    {
      field: 'city',
      headerName: 'Tỉnh, thành',
      width: 120,
      editable: false,
    },
    {
      field: 'action',
      sortable: false,
      headerName: 'Thao tác',
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <IconButton onClick={handleChangeEditOrder.bind(params.row)}>
            <Edit color='primary' />
          </IconButton>
        );
      },
    },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <StyleGrid
            columns={columns}
            rows={searchOrders}
            disableColumnMenu
            disableSelectionOnClick
            rowsPerPageOptions={[5, 25, 50]}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderGrid;
