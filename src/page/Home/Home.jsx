import { Container } from '@mui/material';
import { PopularWeek, SliderTrendingFilm, PopularFilm } from 'components';
import { useMediaQuery } from 'react-responsive';
const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

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

      <PopularWeek />
    </div>
  );
};
export default Home;
