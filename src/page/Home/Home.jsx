import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { PopularWeek, SliderTrendingFilm, PopularFilm } from 'components';
import { useMediaQuery } from 'react-responsive';
import * as API from 'service/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const [trendingFilms, setTrendingFilms] = useState();
  const [trendingTV, setTrendingTV] = useState();
  const [isLoadingMV, setIsLoadingMV] = useState(true);
  const [isLoadingTV, setIsLoadingTV] = useState(true);
  useEffect(() => {
    const axsiosTrending = async () => {
      try {
        const data = await API.getTrending('movie/day');
        setTrendingFilms(data);
        setIsLoadingMV(false);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    const axsiosTrendingTV = async () => {
      try {
        const data = await API.getTrendingTV();
        setTrendingTV(data);
        console.log('tv=>', data);
        setIsLoadingTV(false);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosTrending();
    axsiosTrendingTV();
  }, []);

  return (
    <>
      {isMobile ? (
        <Container maxWidth="xl" style={{ paddingTop: '70px' }}>
          <PopularFilm />
        </Container>
      ) : (
        <div>
          <SliderTrendingFilm />
        </div>
      )}

      <PopularWeek
        title={'Popular Films'}
        isLoading={isLoadingMV}
        trendingArray={trendingFilms}
      />
      <PopularWeek
        title={'Popular TV shows'}
        isLoading={isLoadingTV}
        trendingArray={trendingTV}
      />
    </>
  );
};
export default Home;
