import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Aos from 'aos';
import HeroSectionProduct from '../../components/cus/layout/layoutDetailProduct/HeroSectionProduct';
import ContentTab from '../../components/cus/layout/layoutDetailProduct/ContentTab';
import Header from '../../components/cus/layout/navbar/Header';
import AllCardSimilar from '../../components/cus/layout/layoutDetailProduct/PetSimilar';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getPet } from '../../lib/api/pet';
import LoadingCom from '../../components/LoadingCom';

const DetailPet = (props) => {
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(getPet, true);

  React.useEffect(() => {
    sendRequest(params.id);
  }, [params.id, sendRequest]);

  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  if (status === 'pending') return <LoadingCom />;
  if (error) return <h1>Đã có lỗi xảy ra</h1>;
  return (
    <Grid marginTop='30px'>
      <Container fixed>
        <div data-aos='fade-up' data-aos-duration={1000}>
          <HeroSectionProduct {...data} typeP='Pet' />
          <ContentTab {...data} />
          {/* <AllCardSimilar /> */}
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
