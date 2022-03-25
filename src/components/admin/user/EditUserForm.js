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
import { editUser } from '../../../lib/api/user';
import { UserContext } from '../../../store/admin/user-context';

const EditUserForm = () => {
  const userCtx = useContext(UserContext);
  const { editUserObj, handleEditUser, handleCloseEdit, openEdit } =
    userCtx;
  const { data, error, sendRequest, status } = useHttp(editUser);
  const [name, setName] = React.useState(editUserObj.name);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest({ id: editUserObj.id, name });
  };

  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        swal(
          'Thành công',
          'Bạn đã chỉnh sửa thông tin người dùng thành công',
          'success'
        );
        handleEditUser(data);
        handleCloseEdit();
      } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
    }
  }, [data, status, error, handleEditUser, handleCloseEdit]);
  return (
    <Dialog open={openEdit}>
      {status === 'pending' && <LinearProgress />}
      <form onSubmit={handleSubmit}>
        <DialogTitle>Chỉnh sửa thông tin người dùng</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
            <TextField id='id' label='Id' disabled value={editUserObj.id} />
            <TextField
              id='name'
              label='Họ tên'
              value={name}
              onChange={handleChangeName}
            />
            <TextField
              disabled
              id='email'
              label='Email'
              value={editUserObj.email}
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

export default EditUserForm;
