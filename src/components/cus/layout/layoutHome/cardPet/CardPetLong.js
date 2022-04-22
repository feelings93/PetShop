
import { React, useState } from 'react';
import { border, Box, fontWeight, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BsCart3 } from 'react-icons/bs';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import './cardpetpro.css';
import Rating from '@mui/material/Rating';

const CardPetLong = (props) => {
  const [hide, setHide] = useState(false);
  const [color2, setColor2] = useState('#f2b203');
  const [color1, setColor1] = useState('#ff6b00');
  const [valueRating, setValueRating] = useState(3);

  return (
    <Grid container sm={12} sx={{backgroundColor:'#fff'}}>
      <Grid
        item
        sm={4}
        sx={{
          borderRadius: 2,
          backgroundImage: `url("https://vpet.vn/upload/pet/pet-1617247618.jpg")`,
          backgroundSize: ' cover',
          backgroundPosition: 'center',

          '&:hover': {

            opacity: [0.9, 0.8, 0.7],
          },
        }}
        className='image'
      >
        <div
          className='image__overlay image__overlay--primary'
          onMouseEnter={() => setHide(true)}
          onMouseLeave={() => setHide(false)}
        >
          <div display='flex' justifyContent='space-around'>
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                '&:hover': {
                  backgroundColor: '#ff3b00',
                },
              }}
            >
              <FavoriteBorderIcon
                sx={{
                  color: '#ff3b00',
                  fontSize: '35px',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              />
            </IconButton>
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                '&:hover': {
                  backgroundColor: '#ff3b00',
                },
              }}
              href='/san-pham'
            >
              <SavedSearchIcon
                sx={{
                  color: '#ff3b00',
                  fontSize: '35px',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              />
            </IconButton>
          </div>
          <Button
            variant='contained'
            sx={{
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ff3b00',
              marginTop: '15px',
              '&:hover': {
                backgroundColor: '#ff3b00',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            endIcon={<BsCart3 />}
          >
            Thêm vào giỏ
          </Button>
        </div>
        <Box display='flex' justifyContent='space-between'>
          {props.new === 'true' ? (
            <div className='image__title'>NEW</div>
          ) : (
            <div />
          )}
          {/* {!hide ? (
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
              }}
            >
              <FavoriteBorderIcon sx={{ color: '#00000', fontSize: '35px' }} />
            </IconButton>
          ) : (
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                display: 'none',
              }}
            >
              <FavoriteBorderIcon sx={{ color: '#00000', fontSize: '35px' }} />
            </IconButton>
          )} */}
        </Box>
      </Grid>

      <Grid item sm={8} >
        <Box
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
             <Link
          href='/tours/detailtour'
          underline='none'
          fontWeight='bold'
          fontSize='14px'
          color="#000"
          sx={{
            '&:hover': {
              color: '#c89300',
            },
          }}
        >
          {props.title}
        </Link>
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '30px',
                width: '30px',
              }}
            >
              <FavoriteBorderIcon sx={{ color: '#00000', fontSize: '35px' }} />
            </IconButton>
          </Box>

          <Box display='flex' alignItems='center'>
          <Rating name="read-only" value={valueRating} readOnly size="small" />


          <Typography
            gutterBottom
            component='div'
            fontWeight='regular'
            fontSize='12px'
            color='#555555'
            margin='2px 0px 0px 2px'
          >
            1280 đánh giá
          </Typography>
        </Box>
          <Typography
            sx={{
              width: '100%',
              fontWeight: '400',
              color: '#666',
              marginTop: '10px',
            }}
          >
            Giống chó alaska thuần chủng, được sinh ra từ bố và mẹ đều là
            alaska. Cam kết uy tín
          </Typography>
        </Box>
        <Link
          href='/'
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '14px',
            fontWeight: 'light',
            color: '#f2b203',
            textDecoration: 'none',
            width: '100%',
            marginTop: '5px',
          }}
        >
          Xem thêm ...
        </Link>
        <Box sx={{ alignItems: 'flex-end', marginTop: '20px' }}>
          <Typography
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: color2,
            }}
          >
            20.000.000 VND
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardPetLong;
