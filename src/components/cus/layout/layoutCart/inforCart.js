import React, { Component, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import BillCart from './billCart';
import CardCart from './cardCart';
import TotalCart from './totalCart';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PetCartContext } from '../../../../store/petCart-context';
import { AuthContext } from '../../../../store/auth-context';
import { createOrder } from '../../../../lib/api/order';
import useHttp from '../../../../hooks/use-http';
const InfoCart = () => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const [hideDiscout, setHideDiscount] = useState(true);

  const petCartCtx = useContext(PetCartContext);
  let { items, handleUpQuantity, handleDowQuantity, handleGetTotal, setItems } =
    petCartCtx;
  const authCtx = useContext(AuthContext);
  const { user, setUser } = authCtx;
  //don hang
  const [status1, setStatus1] = useState(null);
  const [total, setTotal] = useState(handleGetTotal());
  const [shipCost, setShipCost] = useState(0);
  const [orderType, setOrderType] = useState(null);
  const [paymentType, setPaymentType] = useState('Thanh toán khi nhận hàng');
  const [customerName, setCustomerName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [commune, setCommune] = useState('');
  const [detailAddress, setDetailAddress] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const [customerId, setCustomerId] = useState();
  const [services, setService] = useState([]);
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [note, setNotes] = useState('None');
  const { handleSubmit, register } = useForm();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  let navigate = useNavigate();

  const { data, error, status, sendRequest } = useHttp(createOrder, true);

  React.useEffect(() => {
    if (status === 'completed') {
      if (!error) {
        console.log(data);
        swal('Thành công', 'Đặt hàng thành công', 'success');
        setItems([]);
        // localStorage.setItem('itemsCart', []);

        window.location.reload();
      } else {
        swal('Đã có lỗi xảy ra', error, 'error');
      }
    }
  }, [data, status, error]);
  const updateValue = () => {
    setTotal(handleGetTotal());
    console.log(Number(localStorage.getItem('userId')));
    if (localStorage.getItem('userId'))
      setCustomerId(Number(localStorage.getItem('userId')));
    let listPets = [];
    let listProducts = [];
    items?.forEach((item) => {
      if (item.type == 'pet') listPets.push({ id: item?.itemId });
      else if (item.type == 'product')
        listProducts.push({ id: item?.itemId, quantity: item?.quantity });
    });
    setPets(listPets);
    setProducts(listProducts);
  };

  const onSubmit = (data1) => {
    updateValue();
    console.log(total);
    console.log(customerId);
    console.log(pets);
    console.log(products);
    // console.log({
    //   ...data1,
    //   total,
    //   shipCost,
    //   customerId,
    //   paymentType,
    //   orderType,
    //   province,
    //   district,
    //   services,
    //   products,
    //   pets,
    // });
    console.log(items);
    if (pets?.length > 0 || products.length > 0) {
      sendRequest({
        ...data1,
        total,
        shipCost,
        customerId,
        paymentType,
        orderType,
        province,
        district,
        services,
        products,
        pets,
        note,
      });
    }

    // if (
    //   emailValidate &&
    //   passwordValidate &&
    //   nameValidate &&
    //   email != null &&
    //   password != null &&
    //   name != null &&
    //   rePassword != null &&
    //   rePassword === password
    // ) {
    //   sendRequest({ ...data1, password });
    //   setIsOpen(false);
    // } else swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 'medium',
            marginBottom: '10px',
          }}
        >
          Thông tin giao hàng
        </Typography>
        <FormControl sx={{ marginTop: '10px' }}>
          <Typography sx={{ fontSize: '14px', color: '#999' }}>
            Quý khách là
          </Typography>

          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='male'
            name='radio-buttons-group'
            sx={{ display: 'flex', flexDirection: 'row' }}
          >
            <FormControlLabel value='male' control={<Radio />} label='Anh' />
            <FormControlLabel value='female' control={<Radio />} label='Chị' />
          </RadioGroup>
        </FormControl>
        <Grid container sm={12} spacing={1}>
          <Grid item sm={12}>
            <TextField
              id='customerName'
              {...register('customerName')}
              label='Họ và tên'
              variant='outlined'
              size='small'
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={8}>
            <TextField
              id='email'
              {...register('email')}
              label='Email'
              variant='outlined'
              size='small'
              type='email'
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              id='phone'
              {...register('phone')}
              label='Số điện thoại'
              variant='outlined'
              size='small'
              type='tel'
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              id='date'
              label='Birthday'
              type='date'
              defaultValue='2017-05-24'
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: '100%' }}
              size='small'
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              id='detailAddress'
              {...register('detailAddress')}
              label='Địa chỉ liên hệ'
              variant='outlined'
              size='small'
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={4}>
            <Autocomplete
              disablePortal
              id='province'
              {...register('province')}
              options={topData}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Tỉnh, thành phố' />
              )}
            />
          </Grid>
          <Grid item sm={4}>
            <Autocomplete
              disablePortal
              id='distric'
              {...register('distric')}
              options={topData}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Quận, huyện' />
              )}
            />
          </Grid>
          <Grid item sm={4}>
            <Autocomplete
              disablePortal
              id='commune'
              {...register('commune')}
              options={topData}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Phường, xã' />
              )}
            />
          </Grid>
          <Grid item sm={12}>
            <FormControl sx={{ marginTop: '20px', width: '100%' }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'medium',
                  marginBottom: '10px',
                }}
              >
                Chọn cách thức để nhận hàng
              </Typography>

              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='male'
                name='radio-buttons-group'
                sx={{ display: 'flex', width: '100%' }}
              >
                <FormControlLabel
                  value='yourHouse'
                  control={<Radio />}
                  label='Giao hàng tận nơi'
                  onClick={() => {
                    console.log('giao hang tan noi');
                    setOrderType('Online');
                  }}
                  sx={{
                    border: 1,
                    borderRadius: '5px',
                    padding: '0px 15px',
                    marginRight: '0px',
                    marginLeft: '0px',
                    color: '#999',
                    borderColor: '#c4c4c4',
                  }}
                />
                <FormControlLabel
                  value='myStore'
                  control={<Radio />}
                  label='Nhận tại cửa hàng'
                  onClick={() => {
                    console.log('giao hang tan noi');
                    setOrderType('Offline');
                  }}
                  sx={{
                    border: 1,
                    borderRadius: '5px',
                    padding: '0px 15px',
                    marginRight: '0px',
                    marginLeft: '0px',
                    color: '#999',
                    borderColor: '#c4c4c4',
                    marginTop: '15px',
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'medium',
                marginBottom: '10px',
              }}
            >
              Phương thức thanh toán
            </Typography>
            <FormControl
              sx={{
                width: '100%',
                border: 1,
                borderRadius: '5px',
                borderColor: '#c4c4c4',
                padding: '0px 10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px 5px',
              }}
            >
              <FormControlLabel
                value='cash'
                control={<Radio />}
                label=''
                sx={{ marginLeft: '10px', marginRight: '0px' }}
              />

              <AccountBalanceWalletIcon />
              <Typography>Thanh toán bằng tiền mặt (SHIP COD)</Typography>
            </FormControl>
          </Grid>
          <Grid
            item
            sm={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <a
              style={{
                fontSize: '15px',
                color: '#2196f3',
                textDecoration: 'none',
              }}
              onClick={() => navigate('/gio-hang')}
            >
              {' '}
              Giỏ hàng
            </a>
            <Button variant='contained' size='medium' type='submit'>
              {' '}
              Hoàn tất đơn hàng
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
const topData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];
export default InfoCart;
