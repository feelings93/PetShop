import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { Delete, Edit } from '@mui/icons-material';
import StyleGrid from '../../UI/StyleGrid/StyleGrid';

function partial(fn, ...args) {
  return fn.bind(fn, ...args);
}

const CategoryGrid = (props) => {
  const { categories, handleChangeEditCategory } = props;
  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
    },
    {
      field: 'name',
      headerName: 'Tên danh mục',
      width: 200,
      editable: false,
    },
    {
      field: 'parent',
      headerName: 'Tên danh mục cha',
      width: 200,
      editable: false,
      valueGetter: (params) => {
        return params.row.parent?.name;
      },
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
            <IconButton onClick={partial(handleChangeEditCategory, params.row)}>
              <Edit />
            </IconButton>
            <IconButton>
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
            rows={categories}
            disableSelectionOnClick
            rowsPerPageOptions={[5, 25, 50]}
          />
        </div>
      </div>
    </div>
  );
};
CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      parent: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
      children: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
      ),
    })
  ).isRequired,
  handleChangeEditCategory: PropTypes.func.isRequired,
};

export default CategoryGrid;
