/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
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
// eslint-disable-next-line no-unused-vars
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';

import './HeroSection.css';
import Button from '@mui/material/Button';

const HeroSectionProduct = () => {
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
    <Link underline='hover' key='1' color='inherit' href='/'>
      Pet Family
    </Link>,
    <Link underline='hover' key='2' color='inherit' href='/tours'>
      San pham
    </Link>,
    <Typography key='3' color='#bfbfbf'>
      Cho Alaska
    </Typography>,
  ];
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [color2, setColor2] = React.useState('#f2b203');
  const [color1, setColor1] = React.useState('#ff6b00');

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
            backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*')`,
            backgroundSize: ' cover',
            backgroundColor: '#f99',
            backgroundPosition: 'center',

            '&:hover': {
              backgroundColor: '#ff6868',
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
              variant='h6'
              component='h2'
              style={{
                fontSize: '35px',
                fontWeight: 'bold',
              }}
            >
              ALASKA HỒNG PHẤN Ú NÙ
            </Typography>
            <Box>
              <IconButton
                aria-label='delete'
                sx={{
                  marginRight: '2px',
                  backgroundColor: '#00aa6c',
                  borderRadius: 8,
                  height: '20px',
                  width: '20px',
                }}
              />
              <IconButton
                aria-label='delete'
                sx={{
                  marginRight: '2px',
                  backgroundColor: '#00aa6c',
                  borderRadius: 8,
                  height: '20px',
                  width: '20px',
                }}
              />
              <IconButton
                aria-label='delete'
                sx={{
                  marginRight: '2px',
                  backgroundColor: '#00aa6c',
                  borderRadius: 8,
                  height: '20px',
                  width: '20px',
                }}
              />
              <IconButton
                aria-label='delete'
                sx={{
                  marginRight: '2px',
                  backgroundColor: '#00aa6c',
                  borderRadius: 8,
                  height: '20px',
                  width: '20px',
                }}
              />
              <IconButton
                aria-label='delete'
                sx={{
                  marginRight: '10px',
                  backgroundColor: '#00aa6c',
                  borderRadius: 8,
                  height: '20px',
                  width: '20px',
                }}
              />
              <Link href='/' color='#676767' marginRight='5px'>
                92
              </Link>
              <Link href='/' color='#676767'>
                Đánh giá
              </Link>
            </Box>
          </Grid>

          <Grid container item xs={12} md={12} sm={12} marginTop='40px'>
            <Grid item xs={12} md={6.5}>
              <div className='textLine'>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{ fontSize: '15px', fontWeight: '500' }}
                >
                  Giá bán:
                </Typography>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: color2,
                    marginBottom: '10px',
                    marginLeft: '10px',
                  }}
                >
                  20.000.000 VND
                </Typography>
              </div>
              <div className='textLine'>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{ fontSize: '15px', fontWeight: '500' }}
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
                  CB3EFF
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
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: '#676767',
                  }}
                >
                  Mèo thuần chủng
                </Typography>
              </div>

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
                  Còn hàng
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
              <TextField
                id='outlined-number'
                label='Số lượng'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: '100%' }}
              />
              <Button
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: color2,
                  size: 'large',
                  width: '100%',
                  marginTop: '10px',
                  // opacity: [0.9, 0.8, 0.7],

                  '&:hover': {
                    backgroundColor: '#f29903',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: '#ff6b00',
                  size: 'large',
                  width: '100%',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#ff6b02',
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
