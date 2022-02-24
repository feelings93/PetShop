import React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];

const AddCategoryForm = (props) => {
  const { open, onClose } = props;
  return (
    <form>
      <Dialog open={open}>
        <DialogTitle>Thêm danh mục</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
            <TextField id='name' label='Tên danh mục' />
            <Autocomplete
              id='parent'
              options={top100Films}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label='Movie' />}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained'>Thêm</Button>
          <Button variant='text' onClick={onClose}>
            Hủy bỏ
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

AddCategoryForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCategoryForm;
