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
import { UserContext } from '../../../store/admin/user-context';
import { createUser } from '../../../lib/api/user';

const AddUserForm = () => {
    const userCtx = useContext(UserContext);
    const { handleAddUser, handleCloseAdd, openAdd} =
      userCtx;
    const { data, error, sendRequest, status } = useHttp(createUser);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  
    const handleChangeName = (e) => {
      setName(e.target.value);
    };
  
    const handleChangeEmail = (e, value) => {
      setEmail(value);
    };

    const handleChangePassword = (e, value) => {
        setPassword(value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest({ name, email, password });
    };
  
    React.useEffect(() => {
      if (status === 'completed') {
        if (data) {
          swal('Thành công', 'Bạn đã thêm người dùng mới thành công', 'success');
          handleAddUser(data);
          handleCloseAdd();
        } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
      }
    }, [data, status, error, handleAddUser, handleCloseAdd]);
    return (
      <Dialog open={openAdd}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Thêm người dùng</DialogTitle>
          <DialogContent>
            <Stack mt={1} spacing={2}>
              <TextField
                id='name'
                label='Họ tên'
                required
                value={name}
                onChange={handleChangeName}
              />
              <TextField
                id='email'
                label='Email'
                type='email'
                required
                value={email}
                onChange={handleChangeEmail}
              />
              <TextField
                id='password'
                type='password'
                required
                label='Password'
                value={password}
                onChange={handleChangePassword}
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
}

export default AddUserForm