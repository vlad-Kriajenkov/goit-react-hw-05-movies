import PopularWeek from 'components/PopularWeek/PopularWeek';
import SliderTrendingFilm from 'components/SliderTrendingFilm/SliderTrendingFilm';

export const Home = params => {
  return (
    <div>
      <SliderTrendingFilm />

      <PopularWeek />
    </div>
  );
};
