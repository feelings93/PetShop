import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CartPage from '../../components/cus/layout/layoutCart/CartPage';
import InfoCart from '../../components/cus/layout/layoutCart/inforCart';
import ListProduct from '../../components/cus/layout/layoutCart/listProduct';
import { PetCartContext } from '../../store/petCart-context';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getOrder } from '../../lib/api/order';
import LoadingCom from '../../components/LoadingCom';
import swal from 'sweetalert';
import CardMini from '../../components/cus/layout/layoutCart/cardMini';
import logo from '../../assets/images/logo.png';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function InforOrder() {
  const params = useParams();
  let navigate = useNavigate();

  const petCartCtx = useContext(PetCartContext);
  let { items, handleUpQuantity, handleDowQuantity, handleGetTotal } =
    petCartCtx;
  const [hideDiscout, setHideDiscount] = useState(true);
  const { sendRequest, status, data, error } = useHttp(getOrder, true);

  React.useEffect(() => {
    sendRequest(params.id);
  }, [params.id, sendRequest]);
  React.useEffect(() => {
    if (status === 'completed') {
      if (!error) {
      } else {
        swal('Đã có lỗi xảy ra', error, 'error');
      }
    }
  }, [data, status, error]);
  if (status === 'pending') return <LoadingCom />;
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='#000'
      onClick={() => navigate('/')}
      fontWeight='regular'
      sx={{ textDecoration: 'none', cursor: 'pointer' }}
    >
      Trang chủ
    </Link>,
    <Typography key='2' color='#999999'>
      Đơn hàng
    </Typography>,
  ];
  return (
    <div>
      <Container fixed>
        <Box
          sx={{
            backgroundColor: '#f7faff',
            padding: '10px 10px',
            borderRadius: '5px',
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        <Grid container sm={12} spacing={2} paddingLeft='10px'>
          <Grid item sm={6} marginTop='5px'>
            <div>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'medium',
                  marginBottom: '10px',
                }}
              >
                Thông tin giao hàng
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#999' }}>
                Quý khách là
              </Typography>

              <Grid container sm={12} spacing={1} marginTop='10px'>
                <Grid item sm={12}>
                  <TextField
                    id='customerName'
                    label='Họ và tên'
                    variant='outlined'
                    size='small'
                    sx={{ width: '100%' }}
                    disabled
                    value={data?.customerName}
                  />
                </Grid>
                {/* <Grid item sm={8}>
                  <TextField
                    id='email'
                    label='Email'
                    variant='outlined'
                    size='small'
                    type='email'
                    sx={{ width: '100%' }}
                    disabled
                  />
                </Grid> */}
                <Grid item sm={12}>
                  <TextField
                    id='phone'
                    label='Số điện thoại'
                    variant='outlined'
                    size='small'
                    type='tel'
                    sx={{ width: '100%' }}
                    disabled
                    value={data?.phone}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    id='detailAddress'
                    label='Địa chỉ liên hệ'
                    variant='outlined'
                    size='small'
                    sx={{ width: '100%' }}
                    disabled
                    value={data?.detailAddress}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextField
                    disablePortal
                    id='province'
                    size='small'
                    disabled
                    value={data?.province}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextField
                    disablePortal
                    id='distric'
                    size='small'
                    disabled
                    value={data?.distric}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextField
                    disablePortal
                    id='commune'
                    size='small'
                    disabled
                    value={data?.commune}
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
                        disabled
                        checked={data?.orderType == 'Online'}
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
                        checked={data?.orderType == 'Offline'}
                        disabled
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
                      disabled
                      checked={true}
                    />

                    <AccountBalanceWalletIcon />
                    <Typography>Thanh toán bằng tiền mặt (SHIP COD)</Typography>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item sm={6} sx={{ backgroundColor: '#f7faff' }}>
            <hr width='100%' align='center' color='#dadada' />
            <Box display='flex'>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'regular',
                  marginBottom: '10px',
                }}
              >
                Trạng thái đơn hàng:
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  marginLeft: '20px',
                  color: '#1077ec',
                }}
              >
                {data?.status}
              </Typography>
            </Box>
            <Box display='flex'>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'regular',
                  marginBottom: '10px',
                }}
              >
                Trạng thái thanh toán:
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  marginLeft: '10px',
                  color: `${
                    data?.paymentStatus == 'Chưa thanh toán' ? 'red' : 'green'
                  }`,
                }}
              >
                {data?.paymentStatus}
              </Typography>
            </Box>
            <hr width='100%' align='center' color='#dadada' />

            <Box>
              <Grid container sm={12} spacing={2} sx={{ padding: '15px 15px' }}>
                {data?.petOrderItems.map((item) => (
                  <Grid item sm={12}>
                    <>
                      <Grid
                        container
                        sm={12}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Grid item sm={2}>
                          <Badge
                            badgeContent={item.pet?.quantity}
                            color='warning'
                          >
                            <Box
                              sx={{
                                height: '50px',
                                width: '50px',
                                borderRadius: 2,
                                boxShadow: 3,
                                backgroundImage: `${`url(${logo})`}`,
                                backgroundSize: ' cover',
                                backgroundPosition: 'center',
                              }}
                            />
                          </Badge>
                        </Grid>
                        <Grid item sm={8}>
                          <Typography
                            sx={{
                              fontWeight: 'regular',
                              fontStyle: 'Monospace',
                              fontSize: '16px',
                            }}
                          >
                            {item.pet.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 'light',
                              fontStyle: 'Monospace',
                              fontSize: '14px',
                            }}
                          >
                            PetID: {item.pet.id}
                          </Typography>
                        </Grid>

                        <Grid item sm={2}>
                          <Typography
                            sx={{ fontWeight: 'medium', fontSize: '14px' }}
                          >
                            {item.pet.price} VNĐ
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  </Grid>
                ))}
                {/* Producttttttttttttttttttttttttttttttt */}
                {data?.productOrderItems.map((item) => (
                  <Grid item sm={12}>
                    <>
                      <Grid
                        container
                        sm={12}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Grid item sm={2}>
                          <Badge badgeContent={item.quantity} color='warning'>
                            <Box
                              sx={{
                                height: '50px',
                                width: '50px',
                                borderRadius: 2,
                                boxShadow: 3,
                                backgroundImage: `${`url(${logo})`}`,
                                backgroundSize: ' cover',
                                backgroundPosition: 'center',
                              }}
                            />
                          </Badge>
                        </Grid>
                        <Grid item sm={8}>
                          <Typography
                            sx={{
                              fontWeight: 'regular',
                              fontStyle: 'Monospace',
                              fontSize: '16px',
                            }}
                          >
                            {item.product.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 'light',
                              fontStyle: 'Monospace',
                              fontSize: '14px',
                            }}
                          >
                            ProductID: {item.product.id}
                          </Typography>
                        </Grid>

                        <Grid item sm={2}>
                          <Typography
                            sx={{ fontWeight: 'medium', fontSize: '14px' }}
                          >
                            {item.price} VNĐ
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  </Grid>
                ))}
                <hr width='100%' align='center' color='#dadada' />
                <Grid item sm={12}>
                  <Grid
                    item
                    sm={12}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography>Phí vận chuyển</Typography>
                    <Typography>{data?.shipCost} VNĐ</Typography>
                  </Grid>
                  <hr width='100%' align='center' color='#dadada' />
                  <Grid
                    item
                    sm={12}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography>Tổng cộng</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {data?.total} VNĐ
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
