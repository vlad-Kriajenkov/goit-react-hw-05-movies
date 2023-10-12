import { PopularWeek, SliderTrendingFilm } from 'components';

const Home = () => {
  return (
    <div>
      <div style={{ height: '100vh' }}>
        <SliderTrendingFilm />
      </div>

      <PopularWeek />
    </div>
  );
};
export default Home;
