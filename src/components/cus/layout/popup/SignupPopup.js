/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import './SignupPopup.css';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import useHttp from '../../../../hooks/use-http';
import { createCustomer } from '../../../../lib/api/customer';
import swal from 'sweetalert';
import { login } from '../../../../lib/api/customer_auth';
import { signUp } from '../../../../lib/api/auth';
const Transition = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FormDialog(props) {
  const [checked, setChecked] = React.useState(false);
  const [isOpen,setIsOpen] = React.useState(props.open)
  const [name, setName] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [nameValidate, setNameValidate] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [emailValidate, setEmailValidate] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordValidate, setPasswordValidate] = React.useState(null);
  const [rePassword, setRePassword] = React.useState(null);
  const [checkRePassword, setCheckRePassword] = React.useState(false);

  const { data, error, status, sendRequest } = useHttp(signUp);
  const { handleSubmit, register } = useForm();

  // const petCtx = useContext(PetContext);
  // const { setPets, pets } = petCtx;

  React.useEffect(() => {
    if (name == null) {
      setNameValidate(true);
      return;
    }
    if (String(name).length > 0) setNameValidate(true);
    else setNameValidate(false);
  }, [name]);

  React.useEffect(() => {
    if (password == null) {
      setPasswordValidate(true);
      return;
    }
    if (String(password).length >= 6 && String(password).length <= 20)
      setPasswordValidate(true);
    else setPasswordValidate(false);
  }, [password]);
  React.useEffect(() => {
    if (email == null) {
      setEmailValidate(true);
      return;
    }
    if (
      email.match(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setEmailValidate(true);
    else setEmailValidate(false);
  }, [email]);
  React.useEffect(() => {
    if (status === 'completed') {
      if (!error) {
        console.log(data);
        swal('Thành công', 'Bạn đã thêm tài khoản mới thành công', 'success');
        window.localStorage.setItem('accessToken', data.accessToken);
        window.location.reload();
      } else {
        swal('Đã có lỗi xảy ra', error, 'error');
      }
    }
  }, [data, status, error]);
  const handleChange = (event) => {
    setChecked(event.target.checked);

    if (
      emailValidate &&
      passwordValidate &&
      nameValidate &&
      email != null &&
      password != null &&
      name != null &&
      rePassword != null &&
      rePassword === password
    ) {
      setChecked(true);
    } else setChecked(false);
  };

  const handleClick = () => {
    console.log('met nghe');
  };
  const onSubmit = (data1) => {
    console.log(data1);
    data1={email: "1@1.com",
    name: "123",
    password: "123456",
    phone: "123"}
    if (
      emailValidate &&
      passwordValidate &&
      nameValidate &&
      email != null &&
      password != null &&
      name != null &&
      rePassword != null &&
      rePassword === password
    ){

      sendRequest(data1);
      setIsOpen(false);
    }
    else swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
  };
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClose}
      maxWidth='xs'
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'white',
          borderStyle: 'solid',
          borderColor: '#808080',
          borderWidth: 2,
          borderRadius: 30,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          <Typography
            variant='subtitle1'
            align='center'
            style={{ color: '#808080', fontWeight: 'bold' }}
          />
          <Typography
            variant='h5'
            align='center'
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '24px',
              paddingBottom: '10px',
              paddingTop: '10px',
            }}
          >
            Tạo tài khoản khách hàng
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div className='textinput'>
            <div className=''>
              <Typography
                style={{
                  color: 'black',
                  paddingBottom: '5px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Họ và tên
              </Typography>
              <input
                {...register('name')}
                className='form__input'
                type='text'
                id='name'
                name='name'
                placeholder='Mark'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=''>
              <Typography
                style={{
                  color: 'black',
                  paddingBottom: '5px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Số điện thoại
              </Typography>
              <input
                className='form__input'
                {...register('phone')}
                type='text'
                id='phone'
                name='phone'
                placeholder='84 01213111'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          {/* <div className='textinput'>
          <Typography
            style={{
              color: 'black',
              paddingBottom: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Username
          </Typography>
          <input
            className='form__input'
            type='text'
            id='username'
            name='Username'
            placeholder='foodroad8000'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {usernameValidate === false && (
            <Box pt={1}>
              <Typography fontSize={15} color='red'>
                Username cannot be blank!
              </Typography>
            </Box>
          )}
        </div> */}

          <div className='textinput'>
            {/* <TextField
            variant="outlined"
            margin="dense"
            id="username"
            label="E-Mail"
            type="email"
            fullWidth
          /> */}
            <Typography
              style={{
                color: 'black',
                paddingBottom: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              E-mail
            </Typography>
            <input
              className='form__input'
              {...register('email')}
              type='email'
              id='email'
              name='email'
              placeholder='foodroad@gmail.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailValidate === false && (
              <Box pt={1}>
                <Typography fontSize={15} color='red'>
                  Example: Foodroad@gmail.com
                </Typography>
              </Box>
            )}
          </div>

          <div className='textinput'>
            <Typography
              style={{
                color: 'black',
                paddingBottom: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Mật khẩu
            </Typography>
            <input
              {...register('password')}
              className='form__input'
              type='password'
              id='password'
              name='Mật khẩu'
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {passwordValidate === false && (
              <Box pt={1}>
                <Typography fontSize={15} color='red'>
                  Mập khẩu phải có từ 6-20 ký tự
                </Typography>
              </Box>
            )}
          </div>
          <div className='textinput'>
            <Typography
              style={{
                color: 'black',
                paddingBottom: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Nhập lại mật khẩu
            </Typography>
            <input
              className='form__input'
              type='password'
              id='rePassword'
              name='RePassword'
              placeholder='Nhập lại mật khẩu'
              value={rePassword}
              onChange={(e) => {
                setRePassword(e.target.value);
                rePassword === password
                  ? setCheckRePassword(true)
                  : setCheckRePassword(false);
              }}
            />
            {rePassword !== password && (
              <Box pt={1}>
                <Typography fontSize={15} color='red'>
                  Mật khẩu phải trùng với mật khẩu ở trên
                </Typography>
              </Box>
            )}
          </div>
          <Box pt={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  style={{
                    color: '#42b72a',
                  }}
                />
              }
              label={
                <Typography
                  variant='subtitle6'
                  style={{ color: '#808080', fontSize: '13px' }}
                >
                  Ive read and agree with Terms of Service and our Privacy
                  Policy
                </Typography>
              }
              style={{ paddingRight: '10px', paddingLeft: '10px' }}
            />
          </Box>

          <div className='textinput'>
            {checked ? (
              <Button
                variant='contained'
                fullWidth
                type='submit'
                // onClick={() => {
                //   if (
                //     emailValidate &&
                //     passwordValidate &&
                //     nameValidate &&
                //     email != null &&
                //     password != null &&
                //     name != null &&
                //     rePassword !=null &&
                //     checkRePassword
                //   ) {
                //     props.onClose();
                //     // Swal.fire({
                //     //   title: 'SUCCESS',
                //     //   text: 'Your account has been created.',
                //     //   icon: 'success',
                //     //   timer: 1500,
                //     //   showConfirmButton: false,
                //     // });
                //   }
                // }}
                style={{
                  height: '50px',
                  textTransform: 'none',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  backgroundColor: '#42b72a',
                }}
              >
                Đăng ký
              </Button>
            ) : (
              <Button
                disabled
                variant='contained'
                fullWidth
                style={{
                  height: '50px',
                  textTransform: 'none',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(0, 0, 0, 0.12)',
                }}
              >
                Đăng ký
              </Button>
            )}
          </div>

          {/* <Divider
              sx={{ bgcolor: (theme) => theme.palette.divider }}
              style={{
                border: "none",
                height: 1,
                margin: 0,
                backgroundColor: "#404040"
              }}
            />

          <div style={{padding: '10px'}}>
            <Typography variant="subtitle5" style={{color: "#808080"}}>
              Already had an account?
            </Typography>
          </div> */}
        </DialogContent>
      </form>
    </Dialog>
  );
}
