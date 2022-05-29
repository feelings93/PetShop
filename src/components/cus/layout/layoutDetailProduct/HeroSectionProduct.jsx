import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Link from '@mui/material/Link';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import { useNavigate } from 'react-router-dom';
import { PetCartContext } from '../../../../store/petCart-context';
import './HeroSection.css';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import logo from '../../../../assets/images/logo.png';

const HeroSectionProduct = (props) => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    root: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderRadius: 30,
        width: '40px',
      },
      '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#f2b203',
      },
      // '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      //   borderColor: 'purple',
      // },
    },
  });
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      onClick={() => navigate('/')}
    >
      Pet Family
    </Link>,
    <Link
      underline='hover'
      key='2'
      color='inherit'
      onClick={() => navigate('/san-pham')}
    >
      San pham
    </Link>,
    <Typography key='3' color='#bfbfbf'>
      {props?.name}
    </Typography>,
  ];
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [color2, setColor2] = React.useState('#f2b203');
  const [color1, setColor1] = React.useState('#faaf00');
  const [valueRating, setValueRating] = React.useState(3);

  const petCartCtx = useContext(PetCartContext);
  const { items, setItems, handleAddToCart } = petCartCtx;

  return (
    <Box margin=''>
      <Grid container sm={12} xs={12} md={12} display='flex'>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ backgroundColor: '#f7faff' }}
        >
          <Box display='flex' alignItems='center'>
            <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Box>
          <Box>
            <IconButton
              aria-label='delete'
              sx={{
                marginRight: '10px',
                color: '#000000',
                borderRadius: 8,
                border: 2,
                height: '50px',
                width: '50px',
              }}
            >
              <CloudUploadOutlinedIcon
                sx={{ color: '#00000', fontSize: '35px' }}
              />
            </IconButton>
            <IconButton
              aria-label='delete'
              sx={{
                color: '#000000',
                borderRadius: 8,
                border: 2,
                height: '50px',
                width: '50px',
              }}
            >
              <FavoriteBorderOutlinedIcon
                sx={{ color: '#00000', fontSize: '30px' }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Grid container sm={12} xs={12} md={12} marginTop='10px'>
        <Grid
          container
          item
          md={5}
          sm={12}
          xs={12}
          sx={{
            height: '350px',
            borderRadius: 2,
            boxShadow: 3,
            backgroundImage: `${
              props.photos.length > 0
                ? `url(${props.photos[0].url})`
                : `url(${logo})`
            }`,
            backgroundSize: ' cover',
            backgroundPosition: 'center',

            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Grid item md={1} />
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{ display: 'block', marginTop: '10px' }}
        >
          <Grid item md={12} sm={12} xs={12}>
            <Typography
              style={{
                fontSize: '35px',
                fontWeight: 'regular',
              }}
            >
              {props.name}
            </Typography>
            <Box
              display='flex'
              alignItems='center'
              sx={{ justifyContent: 'flex-start' }}
            >
              <Rating
                name='read-only'
                value={valueRating}
                readOnly
                size='large'
              />

              <Typography
                gutterBottom
                component='div'
                fontWeight='regular'
                fontSize='15px'
                color='#555555'
                margin='2px 0px 0px 2px'
              >
                1280 đánh giá
              </Typography>
            </Box>
          </Grid>

          <Grid container item xs={12} md={12} sm={12} marginTop='40px'>
            <Grid item xs={12} md={6.5}>
              <div className='textLine'>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{ fontSize: '15px', fontWeight: 'light' }}
                >
                  Mã hàng:
                </Typography>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: '#676767',
                  }}
                >
                  {props?.id}
                </Typography>
              </div>

              <div className='textLine' style={{ marginTop: '10px' }}>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{ fontSize: '15px', fontWeight: '500' }}
                >
                  Danh mục:
                </Typography>
                {props.typeP == 'pet' ? (
                  <Typography
                    variant='h6'
                    component='h2'
                    sx={{
                      fontSize: '15px',
                      marginLeft: '10px',
                      color: '#676767',
                    }}
                  >
                    {props.type?.name}/{props.breed?.name}
                  </Typography>
                ) : (
                  <Typography
                    variant='h6'
                    component='h2'
                    sx={{
                      fontSize: '15px',
                      marginLeft: '10px',
                      color: '#676767',
                    }}
                  >
                    {props.category?.name}/{props.subCategory?.name}
                  </Typography>
                )}
              </div>
              {props.typeP != 'pet' && (
                <div className='textLine' style={{ marginTop: '10px' }}>
                  <Typography
                    variant='h6'
                    component='h2'
                    style={{ fontSize: '15px', fontWeight: '500' }}
                  >
                    Số lượng:
                  </Typography>
                  <Typography
                    variant='h6'
                    component='h2'
                    defaultValue={1}
                    sx={{
                      fontSize: '15px',
                      marginLeft: '10px',
                      color: '#676767',
                    }}
                  >
                    {props?.quantity}
                  </Typography>
                </div>
              )}

              <div className='textLine' style={{ marginTop: '10px' }}>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{ fontSize: '15px', fontWeight: '500' }}
                >
                  Tình trạng:
                </Typography>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    fontSize: '18px',
                    marginLeft: '10px',
                    color: '#00aa6c',
                    fontWeight: 'bold',
                  }}
                >
                  {props?.status}
                </Typography>
              </div>
              <div className='textLine' style={{ marginTop: '10px' }}>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{ fontSize: '15px', fontWeight: 'light' }}
                >
                  Giá bán:
                </Typography>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    marginLeft: '10px',
                  }}
                >
                  {props.price} VND
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              md={5.5}
              xs={12}
              sx={{
                backgroundColor: '#fff',
                border: 1,
                padding: '10px 10px 20px 10px',
                borderRadius: '5px',
                borderColor: '#ededed',
              }}
            >
              {props.typeP != 'pet' && (
                <TextField
                  id='outlined-number'
                  label='Số lượng'
                  type='number'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ width: '100%' }}
                />
              )}

              <Button
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: '#2196f3',
                  size: 'large',
                  width: '100%',
                  marginTop: '10px',
                  // opacity: [0.9, 0.8, 0.7],

                  '&:hover': {
                    backgroundColor: '#2196f3',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => {
                  handleAddToCart(props, props.typeP);
                }}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: color2,
                  size: 'large',
                  width: '100%',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: color2,
                  },
                }}
              >
                Yêu cầu tư vấn
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default HeroSectionProduct;
