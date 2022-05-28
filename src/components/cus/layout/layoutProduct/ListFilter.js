import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/system';
import {
  FormControlLabel,
  FormGroup,
  Rating,
  Grid,
  Button,
  Slider,
  Checkbox,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { styled } from '@mui/material/styles';

import useHttp from '../../../../hooks/use-http';
import { getPetTypes } from '../../../../lib/api/pet-type';
import { getCategories } from '../../../../lib/api/category';

import { PetTypeContext } from '../../../../store/pet-type-context';
import { CategoryContext } from '../../../../store/category-context';

import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';

const Typographyf14light = (props) => {
  return (
    <Typography
      variant='h6'
      component='h2'
      sx={{ fontSize: '14px', fontWeight: 'light' }}
    >
      {props.children}
    </Typography>
  );
};
const Typographyf14medium = (props) => {
  return (
    <Typography
      variant='h6'
      component='h2'
      sx={{ fontSize: '14px', fontWeight: 'medium' }}
    >
      {props.children}
    </Typography>
  );
};
const TypographyMod = (props) => {
  return (
    <Typography
      variant='h6'
      component='h2'
      fontSize={props.fontSize || '18px'}
      fontWeight={props.fontWeight || 'medium'}
    >
      {props.children}
    </Typography>
  );
};
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#00aa6c',
    // color: green[600],
  },
  '& .MuiRating-iconHover': {
    // color: green[600],

    color: '#00aa6c',
  },
  '&.css-dqr9h-MuiRating-label': {
    marginTop: '2px',
  },
});
const labels = {
  0: 'Poor',
  1: 'Terrible',
  2: 'Average',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

const ListFilters = (props) => {
  const [price, setPrice] = useState([100000, 10000000]);

  const [isClickInList, setIsClickInList] = useState(false);
  const [ratingNumber, setRatingNumber] = useState(0);

  const { error, status, sendRequest, data } =
    props.typeP == 'pet'
      ? useHttp(getPetTypes, true)
      : useHttp(getCategories, true);
  const petTypeCtx = useContext(PetTypeContext);
  const { setPetTypes } = petTypeCtx;
  const categoryCtx = useContext(CategoryContext);
  const { setCategories } = categoryCtx;

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === 'completed' && data) {
      props.typeP == 'pet' ? setPetTypes(data) : setCategories(data);
    }
  }, [status, setPetTypes, setCategories, data]);

  if (status === 'pending')
    return (
      <Dialog open={true}>
        <CircularProgress />
      </Dialog>
    );
  if (error) return <h1>Đã có lỗi xảy ra</h1>;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - 30), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + 30)]);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '7px',
        padding: '0px 0px 10px 0px',
      }}
    >
      {/* Covid 19 */}
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod fontSize='14px'>
          Bởi vì dịch covid-19, quý khách vui lòng mang khẩu trang khi đến nhé
        </TypographyMod>
      </Box>
      <Divider />
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          Danh mục
        </Typography>
        {data?.map((e) => (
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px 10px',
                cursor: 'pointer',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => setIsClickInList(!isClickInList)}
            >
              <Typography>{e.name}</Typography>
              <Typography>
                ({props.typeP == 'pet' ? e.pets?.length : e.products?.length})
              </Typography>
            </Box>
          </>

          // <Box
          //   sx={{
          //     display: 'flex',
          //     justifyContent: 'space-between',
          //     padding: '5px 20px',
          //     cursor: 'pointer',
          //     '&:hover': {
          //       opacity: [0.9, 0.8, 0.7],
          //     },
          //   }}
          //   onClick={() => console.log('Click item in list')}
          // >
          //   <Typography>{e}</Typography>
          //   <Typography>(12)</Typography>
          // </Box>
        ))}

        {/* <FormGroup>
          <FormControlLabel
            control={<Button />}
            label={
              <Typographyf14medium>
                Free cancellation{' '}
                <IconButton sx={{ ml: 1 }}>
                  <ErrorOutlineIcon />
                </IconButton>
              </Typographyf14medium>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typographyf14light>
                Reserve now, pay at stay
                <IconButton sx={{ ml: 1 }}>
                  <ErrorOutlineIcon />
                </IconButton>
              </Typographyf14light>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typographyf14light>
                Properties with special offers
              </Typographyf14light>
            }
          />
        </FormGroup> */}
      </Box>
      <Divider />
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod fontSize='14px'>Giá</TypographyMod>
        <Box textAlign='center'>
          <TypographyMod fontSize='12px'>
            Từ {price[0]} VNĐ đến {price[1]} VNĐ
          </TypographyMod>
        </Box>
        <Box>
          <Slider
            defaultValue={500000}
            onChange={handleChange}
            value={price}
            step={100000}
            min={100000}
            max={10000000}
            valueLabelDisplay='auto'
            disableSwap
            sx={{ color: '#2196f3', ml: 1 }}
          />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod fontSize='14px'>Phổ biến</TypographyMod>
        <Box textAlign='center'>
          <TypographyMod fontSize='12px'>
            {ratingNumber} Sao đánh giá
          </TypographyMod>
        </Box>
        <Box
          sx={{
            width: 250,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name='simple-controlled'
            value={ratingNumber}
            onChange={(event, newValue) => {
              setRatingNumber(newValue);
            }}
          />
          <Typography
            fontSize='12px'
            sx={{ marginLeft: '5px', fontWeight: 'medium' }}
          >
            {labels[ratingNumber]}
          </Typography>
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={<Typographyf14medium>Sản phẩm mới</Typographyf14medium>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typographyf14light>Sản phẩm bán chạy</Typographyf14light>}
          />
        </FormGroup>
      </Box>
      <Box sx={{ textAlign: 'end', padding: '5px 10px' }}>
        <Button variant='contained'>Áp dụng lọc</Button>
      </Box>
    </Box>
  );
};

export default ListFilters;
