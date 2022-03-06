import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';

const Product = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  return (
    <Stack
      mb={2}
      justifyContent='space-between'
      alignItems='center'
      direction='row'
    >
      <Typography>Sản phẩm</Typography>
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
  );
};

export default Product;
