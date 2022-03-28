import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import useHttp from '../../hooks/use-http';
import { getUsers } from '../../lib/api/user';
import { UserContext } from '../../store/admin/user-context';
import UserGrid from '../../components/admin/user/UserGrid';
import AddUserForm from '../../components/admin/user/AddUserForm';
import EditUserForm from '../../components/admin/user/EditUserForm';
import DelUserForm from '../../components/admin/user/DelUserForm';

const User = () => {
  const { data, error, status, sendRequest } = useHttp(getUsers, true);
  const userCtx = useContext(UserContext);
  const { setUsers, openAdd, openEdit, openDelete, handleOpenAdd } = userCtx;
  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  React.useEffect(() => {
    if (status === 'completed' && data) {
      setUsers(data);
    }
  }, [data, status, setUsers]);

  if (status === 'pending') return <h1>Loading...</h1>;
  if (error) return <h1>Đã có lỗi xảy ra</h1>;

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
            onClick={handleOpenAdd}
            sx={{ color: '#fff' }}
            variant='contained'
            color='success'
          >
            Thêm
          </Button>
        </Stack>
      </Stack>
      <UserGrid />
      {openAdd && <AddUserForm />}
      {openEdit && <EditUserForm />}
      {openDelete && <DelUserForm />}
    </>
  );
};

export default User;