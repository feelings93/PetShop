import React, { useContext } from 'react';
import swal from 'sweetalert';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import useHttp from '../../../hooks/use-http';
import { ProductContext } from '../../../store/admin/product-context';
import { createProduct } from '../../../lib/api/product';

const AddProductForm = () => {
  const productCtx = useContext(ProductContext);
  const { handleAddProduct, handleCloseAdd } = productCtx;
  const { data, error, sendRequest, status } = useHttp(createProduct);
  const [name, setName] = React.useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest({ name });
  };

  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        swal('Thành công', 'Bạn đã thêm sản phẩm thành công', 'success');
        handleAddProduct(data);
        handleCloseAdd();
      } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
    }
  }, [data, status, error, handleAddProduct, handleCloseAdd]);
  return (
    <Dialog open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Thêm sản phẩm</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
            <TextField
              id='name'
              label='Tên sản phẩm'
              value={name}
              onChange={handleChangeName}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' type='submit'>
            Thêm
          </Button>
          <Button variant='text' onClick={handleCloseAdd}>
            Hủy bỏ
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddProductForm;
