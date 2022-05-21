import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Aos from 'aos';
import HeroSectionProduct from '../../components/cus/layout/layoutDetailProduct/HeroSectionProduct';
import ContentTab from '../../components/cus/layout/layoutDetailProduct/ContentTab';
import Header from '../../components/cus/layout/navbar/Header';
import AllCardSimilar from '../../components/cus/layout/layoutDetailProduct/PetSimilar';
import 'aos/dist/aos.css';

const DetailPet = (props) => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Grid marginTop='30px'>
      <Container fixed>
        <div data-aos='fade-up' data-aos-duration={1000}>
          <HeroSectionProduct />
          <ContentTab />
          <AllCardSimilar />
        </div>

        {/* <ListInfo></ListInfo>
        <div data-aos='fade-up' data-aos-duration={900}>
          <Itinerary></Itinerary>
        </div>
        <div data-aos='fade-up' data-aos-duration={900}>
          <Contribute />
        </div>

        <div data-aos='fade-up' data-aos-duration={900}>
          <DetailTourReview></DetailTourReview>
        </div> */}
      </Container>
      {/* <div data-aos='fade-up' data-aos-duration={900}>
        <CardTourCarousel></CardTourCarousel>
      </div> */}
    </Grid>
  );
};
export default DetailPet;
