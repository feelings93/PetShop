import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import AddCategoryForm from '../../components/admin/category/AddCategoryForm';

const columns = [
  {
    field: 'id',
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Tên danh mục',
  },
  {
    field: 'parent',
    headerName: 'Tên danh mục cha',
  },
];

const data = [
  {
    id: 1,
    name: 'Danh mục chó',
    parent: 'Không có',
  },
  {
    id: 2,
    name: 'Danh mục mèo',
    parent: 'Không có',
  },
  {
    id: 3,
    name: 'Danh mục dịch vụ',
    parent: 'Không có',
  },
  {
    id: 1,
    name: 'Danh mục chó',
    parent: 'Không có',
  },
  {
    id: 2,
    name: 'Danh mục mèo',
    parent: 'Không có',
  },
  {
    id: 3,
    name: 'Danh mục dịch vụ',
    parent: 'Không có',
  },
  {
    id: 1,
    name: 'Danh mục chó',
    parent: 'Không có',
  },
  {
    id: 2,
    name: 'Danh mục mèo',
    parent: 'Không có',
  },
  {
    id: 3,
    name: 'Danh mục dịch vụ',
    parent: 'Không có',
  },
];
const Category = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  return (
    <>
      <Stack
        mb={2}
        justifyContent='space-between'
        alignItems='center'
        direction='row'
      >
        <Typography>Danh mục</Typography>
        <Stack spacing={1} alignItems='center' direction='row'>
          <TextField
            size='small'
            id='search'
            label='Tìm kiếm'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={() => {
              setOpenAdd(true);
            }}
            sx={{ color: '#fff' }}
            variant='contained'
            color='success'
          >
            Thêm
          </Button>
        </Stack>
      </Stack>

      <div style={{ height: 500, width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              columns={columns}
              rows={data}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>

      <AddCategoryForm
        open={openAdd}
        onClose={() => {
          setOpenAdd(false);
        }}
      />
    </>
  );
};

export default Category;
