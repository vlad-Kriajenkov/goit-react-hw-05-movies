import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import {
  PopularWeek,
  SliderTrendingFilm,
  PopularFilm,
  CardDesktop,
  Loader,
} from 'components';
import { useMediaQuery } from 'react-responsive';
import * as API from 'service/api';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const [trendingFilms, setTrendingFilms] = useState();
  const [trendingTV, setTrendingTV] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const axsiosTrending = async () => {
      try {
        const data = await API.getTrending('movie/day');
        setTrendingFilms(data);
        setLoading(false);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    const axsiosTrendingTV = async () => {
      try {
        const data = await API.getTrendingTV();
        setTrendingTV(data);
        console.log('tv=>', data);
        setLoading(false);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosTrending();
    axsiosTrendingTV();
  }, []);

  return (
    <div>
      {isMobile ? (
        <Container maxWidth="xl" style={{ paddingTop: '70px' }}>
          <PopularFilm />
        </Container>
      ) : (
        <div style={{ height: '100vh' }}>
          <SliderTrendingFilm />
        </div>
      )}

      <PopularWeek title={'Popular Films'}>
        {trendingFilms?.results.map(val => (
          <Loader loading={loading} key={nanoid()}>
            <CardDesktop item={val} />
          </Loader>
        ))}
      </PopularWeek>

      <PopularWeek title={'Popular TV shows'}>
        {trendingTV?.results.map(val => (
          <Loader loading={loading} key={nanoid()}>
            <CardDesktop item={val} />
          </Loader>
        ))}
      </PopularWeek>
    </div>
  );
};
export default Home;
