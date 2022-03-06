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
import PropTypes from 'prop-types';
import useHttp from '../../../hooks/use-http';
import { createCategory } from '../../../lib/api/category';

const AddProductForm = (props) => {
  const { open, onClose, categories, handleAddCategory } = props;
  const { data, error, sendRequest, status } = useHttp(createCategory);
  const [name, setName] = React.useState('');
  const [parent, setParent] = React.useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeParent = (e, value) => {
    setParent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest({ name, parentId: parent?.id });
  };

  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        swal('Thành công', 'Bạn đã thêm danh mục mới thành công', 'success');
        handleAddCategory(data);
        onClose();
      } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
    }
  }, [data, status, error, handleAddCategory, onClose]);
  return (
    <Dialog open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Thêm danh mục</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
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
          <Button variant='contained' type='submit'>
            Thêm
          </Button>
          <Button variant='text' onClick={onClose}>
            Hủy bỏ
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

AddProductForm.propTypes = {
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
  handleAddCategory: PropTypes.func.isRequired,
};

export default AddProductForm;
