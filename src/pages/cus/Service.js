import React, { useContext } from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
  Container,
  Grid,
  Box,
  Pagination,
} from '@mui/material';
import { red } from '@mui/material/colors';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

import Aos from 'aos';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import IconButton from '@mui/material/IconButton';

import { TypographyMod } from '../../components/cus/layout/layoutProduct/TypoUtils';
import ListFilters from '../../components/cus/layout/layoutProduct/ListFilter';
import 'aos/dist/aos.css';
import CardPetLong from '../../components/cus/layout/layoutHome/cardPet/CardPetLong';
import CardService from '../../components/cus/layout/layoutHome/cardPet/CardService';
import Header from '../../components/cus/layout/navbar/Header';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import useHttp from '../../hooks/use-http';
import { getServices } from '../../lib/api/service';
import { ServiceContext } from '../../store/service-context';
import LoadingCom from '../../components/LoadingCom';

const topData = [
  { label: 'Giá tăng dần', type: 'asc' },
  { label: 'Giá giảm dần', type: 'desc' },
  { label: 'Mới nhất', type: 'new' },
];
const Services = () => {
  const [label, setLabel] = React.useState('');

  const { error, status, sendRequest, data } = useHttp(getServices, true);
  const serviceCtx = useContext(ServiceContext);
  const { setServices, services } = serviceCtx;
  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  React.useEffect(() => {
    if (status === 'completed' && data) {
      console.log(data);
      setServices(data);
    }
  }, [status, setServices, data]);

  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  if (status === 'pending') return <LoadingCom />;
  if (error) return <h1>Đã có lỗi xảy ra</h1>;
  function handleChangeSort(title) {
    switch (title) {
      case 'Giá tăng dần':
        setServices(
          [...services]?.sort((a, b) => (a.price > b.price ? 1 : -1))
        );
        break;
      case 'Giá giảm dần':
        setServices(
          [...services]?.sort((a, b) => (a.price < b.price ? 1 : -1))
        );

        break;
      case 'Mới nhất':
        setServices([...services]?.reverse());

        break;
      default:
        setServices(data);

        break;
    }
    setLabel(title);
  }
  return (
    <Container fixed>
      {/* {console.log(data)} */}
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: '#F6F9FC' }}
        spacing={2}
      >
        <Grid item xs={12} md={12} lg={12}>
          {/* <div data-aos='fade-up' data-aos-duration={1000}> */}
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '7px',
              padding: '5px 10px',
              marginTop: '8px',
              marginBottom: '10px',
            }}
          >
            <Box display='flex' sx={{ justifyContent: 'flex-end' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '10px',
                }}
              >
                <Typography sx={{ marginRight: '5px' }}>
                  Sắp xếp theo:{' '}
                </Typography>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={topData}
                  size='small'
                  sx={{ width: '150px', zIndex: '2' }}
                  renderInput={(params) => (
                    <TextField {...params} label='Chọn loại sắp xếp' />
                  )}
                  onChange={(e) => {
                    handleChangeSort(e.target.textContent);
                  }}
                />
              </Box>
              <Box>
                <>
                  <IconButton size='small' disabled>
                    <BorderAllIcon />
                  </IconButton>
                  <IconButton size='small'>
                    <DensityMediumIcon />
                  </IconButton>
                </>
              </Box>
            </Box>
          </Box>
          {/* </div> */}
          {/* <div data-aos='fade-up' data-aos-duration={1000}> */}
          <Grid container xs={12} md={12} lg={12} spacing={1}>
            {services?.map((service) => {
              return (
                <Grid item xs={4} md={4}>
                  <CardService
                    {...service}
                    typeP='service'
                    // new={false}
                  />

                  <hr width='95%' align='center' color='#d9d9d9' />
                </Grid>
              );
            })}
          </Grid>
          {/* </div> */}
          <Box display='flex' sx={{ justifyContent: 'center', mb: 1, mt: 2 }}>
            <Pagination count={4} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Services;
