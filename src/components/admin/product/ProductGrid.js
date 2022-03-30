import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from '@mui/icons-material';
import StyleGrid from '../../UI/StyleGrid/StyleGrid';
import { ProductContext } from '../../../store/admin/product-context';

function partial(fn, ...args) {
  return fn.bind(fn, ...args);
}

const ProductGrid = () => {
  const productCtx = useContext(ProductContext);
  const { products, handleChangeEditProduct, handleChangeDelProduct } =
    productCtx;
  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
    },
    {
      field: 'name',
      headerName: 'Tên sản phẩm',
      width: 200,
      editable: false,
    },
    {
      field: 'photos',
      sortable: false,
      headerName: 'Hình ảnh',
      width: 100,
      editable: false,
      renderCell: (params) => {
        return (
          <Avatar
            sx={{ width: '100px', height: '100px' }}
            src={
              params.row.photos[0]?.url ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkH-JPzVPj5TVAyg1OIKjMRbagTYcJIegBwc7KOUlWBA6xPbSD7Za_TIk-_D5xJC3rAs8&usqp=CAU'
            }
            variant='square'
          />
        );
      },
    },
    {
      field: 'quantity',
      headerName: 'Số lượng',
      width: 100,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Giá',
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
      field: 'categories',
      headerName: 'Danh mục',
      sortable: false,
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <Stack spacing={1}>
            {params.row.categories.map((x) => (
              <Chip key={x.id} label={x.name} />
            ))}
          </Stack>
        );
      },
    },
    {
      field: 'action',
      sortable: false,
      headerName: '',
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <Stack direction='row'>
            <IconButton onClick={partial(handleChangeEditProduct, params.row)}>
              <Edit />
            </IconButton>
            <IconButton onClick={partial(handleChangeDelProduct, params.row)}>
              <Delete />
            </IconButton>
          </Stack>
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
            rows={products}
            disableColumnMenu
            disableSelectionOnClick
            rowsPerPageOptions={[5, 25, 50]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
