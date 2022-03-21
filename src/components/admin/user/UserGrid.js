import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from '@mui/icons-material';
import StyleGrid from '../../UI/StyleGrid/StyleGrid';
import { UserContext } from '../../../store/admin/user-context';

function partial(fn, ...args) {
  return fn.bind(fn, ...args);
}

const UserGrid = () => {
  const userCtx = useContext(UserContext);
  const { users, handleChangeEditUser, handleChangeDelUser } = userCtx;
  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
    },
    {
      field: 'name',
      headerName: 'Họ tên',
      width: 200,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: false,
    },
    {
      field: 'action',
      headerName: 'Hành động',
      headerAlign: 'center',
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <Stack direction='row'>
            <IconButton onClick={partial(handleChangeEditUser, params.row)}>
              <Edit />
            </IconButton>
            <IconButton onClick={partial(handleChangeDelUser, params.row)}>
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
            rows={users}
            disableSelectionOnClick
            rowsPerPageOptions={[5, 25, 50]}
          />
        </div>
      </div>
    </div>
  );
};

export default UserGrid;
