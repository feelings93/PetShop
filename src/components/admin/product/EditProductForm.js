import React, { useContext } from 'react';
import swal from 'sweetalert';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import useHttp from '../../../hooks/use-http';
import { ProductContext } from '../../../store/admin/product-context';
import { editProduct } from '../../../lib/api/product';

const EditProductForm = () => {
  const productCtx = useContext(ProductContext);
  const { editProductObj, handleEditProduct, handleCloseEdit } =
    productCtx;
  const { data, error, sendRequest, status } = useHttp(editProduct);
  const [name, setName] = React.useState(editProductObj.name);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest({ id: editProductObj.id, name });
  };

  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        swal('Thành công', 'Bạn đã chỉnh sửa sản phẩm  thành công', 'success');
        handleEditProduct(data);
        handleCloseEdit();
      } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
    }
  }, [data, status, error, handleEditProduct, handleCloseEdit]);
  return (
    <Dialog open={open}>
      {status === 'pending' && <LinearProgress />}
      <form onSubmit={handleSubmit}>
        <DialogTitle>Chỉnh sửa danh mục</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
            <TextField id='id' label='Id' disabled value={editProductObj.id} />
            <TextField
              id='name'
              label='Tên danh mục'
              value={name}
              onChange={handleChangeName}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={status === 'pending'}
            variant='contained'
            type='submit'
          >
            Cập nhật
          </Button>
          <Button variant='text' onClick={handleCloseEdit}>
            Hủy bỏ
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditProductForm;