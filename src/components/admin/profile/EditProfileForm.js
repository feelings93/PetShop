import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { updateProfile } from '../../../lib/api/auth';
import useHttp from '../../../hooks/use-http';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none',
});

const EditProfileForm = ({ onClose, editUser }) => {
  const { sendRequest, status, data, error } = useHttp(updateProfile);

  const [hoTen, setHoTen] = React.useState(editUser.name);
  const [urlLocal, setUrlLocal] = React.useState(
    editUser.avatarUrl ||
      'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  );
  const [file, setFile] = React.useState([]);
  const hoTenChangeHandler = (event) => {
    setHoTen(event.target.value);
  };
  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        onClose();
        swal(
          'Cập nhật thành công!',
          'Bạn đã cập nhật thông tin cá nhân thành công',
          'success'
        );
        window.location.reload();
      } else if (error) swal('Đã có lỗi xảy ra', error, 'error');
    }
  }, [data, error, status, onClose, hoTen]);

  const handleChangeFile = async (event) => {
    try {
      const url = await readUploadedFileAsURL(event.target.files[0]);
      setFile(event.target.files[0]);
      setUrlLocal(url);
    } catch (err) {
      console.log(err);
    }
  };

  const editProfileSubmitHandler = (event) => {
    event.preventDefault();
    let request = {
      name: hoTen,
      file,
    };
    sendRequest(request);
  };
  return (
    <Dialog open={true} onClose={onClose}>
      <form onSubmit={editProfileSubmitHandler}>
        {status === 'pending' && <LinearProgress />}
        <DialogTitle>Cập nhật thông tin</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ width: '300px' }}>
            <TextField
              required
              autoFocus
              value={hoTen}
              margin='dense'
              id='name'
              label='Họ tên'
              type='text'
              variant='outlined'
              onChange={hoTenChangeHandler}
            />
            <label htmlFor='icon-button-file'>
              <Input
                accept='.jpg, .png'
                id='icon-button-file'
                type='file'
                onChange={handleChangeFile}
              />
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='span'
              >
                <PhotoCamera />
              </IconButton>
              <Avatar src={urlLocal} />
            </label>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={status === 'pending'}
            type='submit'
            variant='contained'
          >
            {status === 'pending' ? 'Đang lưu...' : 'Xác nhận'}
          </Button>
          <Button onClick={onClose}>Hủy bỏ</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const readUploadedFileAsURL = (inputFile) => {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException('Problem parsing input file.'));
    };

    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result);
    };
    temporaryFileReader.readAsDataURL(inputFile);
  });
};

EditProfileForm.propTypes = {
  onClose: PropTypes.func,
  editUser: PropTypes.shape(),
};

export default EditProfileForm;
