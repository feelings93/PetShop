import { React, useState, useContext } from 'react';
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
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { PetCartContext } from '../../../../../store/petCart-context';

const CardPetPro = (props) => {
  const [hide, setHide] = useState(false);
  const [color1, setColor1] = useState('#f2b203');
  const [color2, setColor2] = useState('#000');
  const [valueRating, setValueRating] = useState(3);

  const petCartCtx = useContext(PetCartContext);
  const { items, setItems, handleAddToCart } = petCartCtx;

  return (
    <Box padding='8px' sx={{ backgroundColor: '#fff', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            boxShadow: '3',
            borderRadius: '15px',
            padding: '5px 10px',
            alignItems: 'center',
          }}
        >
          <LocalOfferOutlinedIcon sx={{ width: '15px', height: '15px' }} />
          <Typography sx={{ fontSize: '12px' }}>{props.type}</Typography>
        </Box>
        {!hide ? (
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
            <BookmarkBorderOutlinedIcon
              sx={{ width: '20px', height: '20px' }}
            />
          </IconButton>
        ) : (
          <IconButton
            aria-label='delete'
            sx={{
              margin: '5px 5px 0px 0px',
              color: '#000000',
              backgroundColor: '#fff',
              borderRadius: 8,
              height: '10px',
              width: '10px',
              display: 'none',
            }}
          >
            <BookmarkBorderOutlinedIcon
              sx={{ color: '#00000', fontSize: '35px' }}
            />
          </IconButton>
        )}
      </div>
      <Grid
        container
        sm={12}
        sx={{
          height: 300,
          borderRadius: 2,
          backgroundImage: `url(${props.url})`,
          backgroundSize: ' cover',
          backgroundPosition: 'center',
          marginTop: '5px',
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
                  backgroundColor: '#2196f3',
                },
              }}
            >
              <FavoriteBorderIcon
                sx={{
                  color: '#2196f3',
                  fontSize: '35px',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              />
            </IconButton>
            <IconButton
              aria-label=''
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                '&:hover': {
                  backgroundColor: '#2196f3',
                },
              }}
              href='/san-pham'
            >
              <SavedSearchIcon
                sx={{
                  color: '#2196f3',
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
              backgroundColor: '#2196f3',
              marginTop: '15px',
              '&:hover': {
                backgroundColor: '#2196f3',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            endIcon={<BsCart3 />}
            onClick={() => {
              handleAddToCart(props);
              console.log(props);
            }}
          >
            Thêm vào giỏ
          </Button>
        </div>
        <Grid
          container
          item
          sm={12}
          display='flex'
          justifyContent='space-between'
        >
          {props.new === 'true' ? (
            <div className='image__title'>NEW</div>
          ) : (
            <div />
          )}
        </Grid>
      </Grid>

      <Box
        backgroundColor='#fff'
        marginTop='5px'
        padding='4px'
        sx={{ textAlign: 'center' }}
      >
        <Link
          href='/tours/detailtour'
          underline='none'
          fontWeight='bold'
          fontSize='14px'
          color='#000'
          sx={{
            '&:hover': {
              color: '#c89300',
            },
          }}
        >
          {props.title}
        </Link>
        <Box
          display='flex'
          alignItems='center'
          sx={{ justifyContent: 'center' }}
        >
          <Rating name='read-only' value={valueRating} readOnly size='small' />

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
          variant='h6'
          gutterBottom
          component='div'
          fontWeight='bold'
          fontSize='18px'
          sx={{ marginTop: '5px' }}
          // color='#ff6b00'
          color={color2}
        >
          {props.price}Đ
        </Typography>
      </Box>
      <Box>
        <Button
          variant='outlined'
          sx={{
            width: '100%',
            fontSize: '12px',
            color: '#000',
            borderColor: '#e7e7e7',
            fontWeight: 'bold',
          }}
          onClick={() => {
            handleAddToCart(props);
          }}
        >
          Thêm vào giỏ hàng
        </Button>
      </Box>
    </Box>
  );
};

export default CardPetPro;
