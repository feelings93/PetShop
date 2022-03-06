import React from 'react';
import swal from 'sweetalert';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import useHttp from '../../../hooks/use-http';
import { editCategory } from '../../../lib/api/category';

const EditCategoryForm = (props) => {
  const { open, onClose, categories, handleEditCategory, category } = props;
  const { data, error, sendRequest, status } = useHttp(editCategory);
  const [name, setName] = React.useState(category.name);
  const [parent, setParent] = React.useState(category.parent);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeParent = (e, value) => {
    setParent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest({ id: category.id, name, parentId: parent?.id });
  };

  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        swal('Thành công', 'Bạn đã chỉnh sửa danh mục  thành công', 'success');
        handleEditCategory(data);
        onClose();
      } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
    }
  }, [data, status, error, handleEditCategory, onClose]);
  return (
    <Dialog open={open}>
      {status === 'pending' && <LinearProgress />}
      <form onSubmit={handleSubmit}>
        <DialogTitle>Chỉnh sửa danh mục</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
            <TextField id='id' label='Id' disabled value={category.id} />
            <TextField
              id='name'
              label='Tên danh mục'
              value={name}
              onChange={handleChangeName}
            />
            <Autocomplete
              id='parent'
              getOptionLabel={(option) => option.name}
              onChange={handleChangeParent}
              isOptionEqualToValue={(option, value) => {
                return option.id === value.id;
              }}
              value={parent}
              options={categories}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  label='Danh mục cha'
                />
              )}
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
          <Button variant='text' onClick={onClose}>
            Hủy bỏ
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

EditCategoryForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
  handleEditCategory: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    parent: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
    children: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
    ),
  }).isRequired,
};

export default EditCategoryForm;
