import React, { Component, useState, useContext, useRef } from 'react';
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
import * as emailjs from 'emailjs-com';

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
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [province, setProvince] = useState('Hồ Chí Minh');
  const [district, setDistrict] = useState('');
  const [communes, setCommunes] = useState(['']);
  const [commune, setCommune] = useState('');
  const [detailAddress, setDetailAddress] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const [customerId, setCustomerId] = useState();
  const [services, setService] = useState([]);
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [note, setNotes] = useState('None');
  const { handleSubmit, register } = useForm();
  const form = useRef();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  let navigate = useNavigate();

  const { data, error, status, sendRequest } = useHttp(createOrder, true);

  const sendEmail = async () => {
    const linkWeb = `${window.location.origin}/don-hang/${data?.id}`;
    await emailjs
      .send(
        'service_3a37tfu',
        'template_67wnlmx',
        {
          customerName: customerName,
          idDonHang: data?.id,
          sdt: phone,
          ngayDat: data?.orderDate,
          toEmail: email,
          linkWeb: linkWeb,
        },
        'U9LL460YLNSrnPP8T'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  React.useEffect(async () => {
    if (status === 'completed') {
      if (!error) {
        console.log(data);
        console.log({
          customerName: customerName,
          idDonHang: data?.id,
          sdt: phone,
          ngayDat: data?.orderDate,
          toEmail: email,
          link: `${window.location.origin}/don-hang/${data?.id}`,
        });
        await sendEmail();
        swal('Thành công', 'Đặt hàng thành công', 'success');
        setItems([]);
        // localStorage.setItem('itemsCart', []);
        navigate(`/`);
        // window.location.reload();
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
    // console.log(total);
    // console.log(customerId);
    // console.log(pets);
    // console.log(products);
    setEmail(data1?.email);
    setCustomerName(data1?.customerName);
    setPhone(data1?.phone);
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
        commune,
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
  const ChangeCommune = (event, value) => {
    switch (value) {
      case 'Quận 1':
        setCommunes(Quan1);
        break;
      case 'Quận 2':
        setCommunes(Quan2);
        break;
      case 'Quận 3':
        setCommunes(Quan3);
        break;
      case 'Quận 4':
        setCommunes(Quan4);
        break;
      case 'Quận 5':
        setCommunes(Quan5);
        break;
      case 'Quận 6':
        setCommunes(Quan6);
        break;
      case 'Quận 7':
        setCommunes(Quan7);
        break;
      case 'Quận 8':
        setCommunes(Quan9);
        break;
      case 'Quận 10':
        setCommunes(Quan10);
        break;
      case 'Quận 11':
        setCommunes(Quan11);
        break;
      case 'Quận 12':
        setCommunes(Quan12);
        break;
      case 'Quận Bình Tân':
        setCommunes(QuanBinhTan);
        break;
      case 'Quận Thủ Đức':
        setCommunes(ThuDuc);
        break;
      case 'Quận Tân Phú':
        setCommunes(QuanTanPhu);
        break;
      case 'Quận Phú Nhuận':
        setCommunes(QuanPhuNhuan);
        break;
      case 'Quận Gò Vấp':
        setCommunes(QuanGoVap);
        break;
      case 'Quận Bình Thạnh':
        setCommunes(QuanBinhThanh);
        break;
      case 'Huyện Bình Chánh':
        setCommunes(HuyenhBinhChanh);
        break;
      case 'Huyện Cần Giờ':
        setCommunes(HuyenCanGio);
        break;
      case 'Huyện Hóc Môn':
        setCommunes(HuyenHocMon);
        break;
      case 'Huyện Nhà Bè':
        setCommunes(HuyenNhaBe);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={localStorage.getItem('userName')}
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
              options={ThanhPho}
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
              options={AllQuan}
              size='small'
              onChange={ChangeCommune}
              renderInput={(params) => (
                <TextField {...params} label='Quận, huyện' />
              )}
            />
          </Grid>
          <Grid item sm={4}>
            <Autocomplete
              disablePortal
              id='commune'
              options={communes}
              size='small'
              onChange={(event, value) => setCommune(value)}
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
const ThanhPho = ['Hồ Chí Minh'];

const Quan1 = [
  'Phường Bến Nghé',
  'Phường Bến Thành',
  'Phường Cầu Kho',
  'Phường Cầu Ông Lãnh',
  'Phường Cô Giang',
  'Phường Đa Kao',
  'Phường Nguyễn Cư Trinh',
  'Phường Nguyễn Thái Bình',
  'Phường Phạm Ngũ Lão',
  'Phường Phường Tân Định',
];
const Quan2 = [
  'Phường An Khánh',
  'Phường An Lợi Đông',
  'Phường An Phú',
  'Phường Bình An',
  'Phường Bình Khánh',
  'Phường Bình Trưng Đông',
  'Phường Bình Trưng Tây',
  'Phường Cát Lái',
  'Phường Thạnh Mỹ Lợi',
  'Phường Thảo Điền',
  'Phường Thủ Thiêm',
];
const Quan3 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
];
const Quan4 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
];
const Quan5 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
];
const Quan6 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
];
const Quan7 = [
  'Phường Bình Thuận',
  'Phường Phú Mỹ',
  'Phường Phú Thuận',
  'Phường Tân Hưng',
  'Phường Tân Kiểng',
  'Phường Tân Phong',
  'Phường Tân Phú',
  'Phường Tân Quy',
  'Phường Tân Thuận Đông',
  'Phường Tân Thuận Tây',
];
const Quan8 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
  'Phường 16',
];
const Quan9 = [
  'Phường Hiệp Phú',
  'Phường Long Bình',
  'Phường Long Phước',
  'Phường Long Thạnh Mỹ',
  'Phường Long Trường',
  'Phường Phú Hữu',
  'Phường Phước Bình',
  'Phường Phước Long A',
  'Phường Phước Long B',
  'Phường Tân Phú',
  'Phường Tăng Nhơn Phú A',
  'Phường Tăng Nhơn Phú B',
  'Phường Trường Thạnh',
];
const Quan10 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
];
const Quan11 = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
  'Phường 16',
];
const Quan12 = [
  'Phường An Phú Đông',
  'Phường Đông Hưng Thuận',
  'Phường Hiệp Thành',
  'Phường Tân Chánh Hiệp',
  'Phường Tân Hưng Thuận',
  'Phường Tân Thới Hiệp',
  'Phường Tân Thới Nhất',
  'Phường Thạnh Lộc',
  'Phường Thạnh Xuân',
  'Phường Thới An',
  'Phường Trung Mỹ Tây',
];
const QuanBinhTan = [
  'Phường An Lạc',
  'Phường An Lạc A',
  'Phường Bình Hưng Hòa',
  'Phường Bình Hưng Hòa A',
  'Phường Bình Hưng Hòa B',
  'Phường Bình Trị Đông',
  'Phường Bình Trị Đông A',
  'Phường Bình Trị Đông B',
  'Phường Tân Tạo',
  'Phường Tân Tạo A',
];
const ThuDuc = [
  'Phường Bình Chiểu',
  'Phường Bình Thọ',
  'Phường Hiệp Bình Chánh',
  'Phường Hiệp Bình Phước',
  'Phường Linh Chiểu',
  'Phường Linh Ðông',
  'Phường Linh Tây',
  'Phường Linh Trung',
  'Phường Linh Xuân',
  'Phường Tam Bình',
  'Phường Tam Phú',
  'Phường Trường Thọ',
];
const QuanTanPhu = [
  'Phường Hiệp Tân',
  'Phường Hòa Thạnh',
  'Phường Phú Thạnh',
  'Phường Phú Thọ Hòa',
  'Phường Phú Trung',
  'Phường Sơn Kỳ',
  'Phường Tân Quý',
  'Phường Tân Sơn Nhì',
  'Phường Tân Thành',
  'Phường Tân Thới Hòa',
  'Phường Tây Thạnh',
];

const QuanTanBinh = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
];
const QuanPhuNhuan = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
  'Phường 17',
];
const QuanGoVap = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 4',
  'Phường 5',
  'Phường 7',
  'Phường 8',
  'Phường 9',
  'Phường 10',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
  'Phường 17',
];
const QuanBinhThanh = [
  'Phường 1',
  'Phường 2',
  'Phường 3',
  'Phường 5',
  'Phường 6',
  'Phường 7',
  'Phường 11',
  'Phường 12',
  'Phường 13',
  'Phường 14',
  'Phường 15',
  'Phường 17',
  'Phường 19',
  'Phường 21',
  'Phường 22',
  'Phường 24',
  'Phường 25',
  'Phường 26',
  'Phường 27',
  'Phường 28',
];
const HuyenBinhChanh = [
  'Xã An Phú Tây',
  'Xã Bình Chánh',
  'Xã Bình Hưng',
  'Xã Bình Lợi',
  'Xã Đa Phước',
  'Xã Hưng Long',
  'Xã Lê Minh Xuân',
  'Xã Phạm Văn Hai',
  'Xã Phong Phú',
  'Xã Quy Đức',
  'Xã Tân Kiên',
  'Xã Tân Nhựt',
  'Xã Tân Quý Tây',
  'Xã Vĩnh Lộc A',
  'Xã Vĩnh Lộc B',
];
const HuyenCanGio = [
  'Xã An Thới Đông',
  'Xã Bình Khánh',
  'Xã Long Hòa',
  'Xã Lý Nhơn',
  'Xã Tam Thôn Hiệp',
  'Xã Thạnh An',
];
const HuyenCuChi = [
  'Thị Trấn Củ Chi ',
  'Xã An Nhơn Tây',
  'Xã An Phú',
  'Xã Bình Mỹ',
  'Xã Hòa Phú',
  'Xã Nhuận Đức',
  'Xã Phạm Văn Cội',
  'Xã Phú Hòa Đông',
  'Xã Phú Mỹ Hưng',
  'Xã Phước Hiệp',
  'Xã Phước Thạnh',
  'Xã Phước Vĩnh An',
  'Xã Tân An Hội',
  'Xã Tân Phú Trung',
  'Xã Tân Thạnh Đông',
  'Xã Tân Thạnh Tây',
  'Xã Tân Thông Hội',
  'Xã Thái Mỹ',
  'Xã Trung An',
  'Xã Trung Lập Hạ',
  'Xã Trung Lập Thượng',
];
const HuyenHocMon = [
  'Xã Bà Điểm',
  'Xã Đông Thạnh',
  'Xã Nhị Bình',
  'Xã Tân Hiệp',
  'Xã Tân Thới Nhì',
  'Xã Tân Xuân',
  'Xã Thới Tam Thôn',
  'Xã Trung Chánh',
  'Xã Xuân Thới Đông',
  'Xã Xuân Thới Sơn',
  'Xã Xuân Thới Thượng',
];
const HuyenNhaBe = [
  'Thị Trấn Nhà Bè',
  'Xã Hiệp Phước',
  'Xã Long Thới',
  'Xã Nhơn Đức',
  'Xã Phú Xuân',
  'Xã Phước Kiển',
  'Xã Phước Lộc',
];

const AllQuan = [
  'Quận 1',
  'Quận 2',
  'Quận 3',
  'Quận 4',
  'Quận 5',
  'Quận 6',
  'Quận 7',
  'Quận 8',
  'Quận 9',
  'Quận 10',
  'Quận 11',
  'Quận 12',
  'Quận Bình Tân',
  'Quận Bình Thạnh',
  'Quận Gò Vấp',
  'Quận Phú Nhuận',
  'Quận Tân Bình',
  'Quận Tân Phú',
  'Quận Thủ Đức',
  'Huyện Bình Chánh',
  'Huyện Cần Giờ',
  'Huyện Củ Chi',
  'Huyện Hóc Môn',
  'Huyện Nhà Bè',
];
export default InfoCart;
