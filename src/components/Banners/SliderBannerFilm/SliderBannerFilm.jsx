import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import './SliderBannerFilm.css';
import * as API from 'service/api';
import { Rating } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { Banner } from 'components';
const SliderBannerFilm = () => {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [trendingFilms, setTrendingFilms] = useState();

  useEffect(() => {
    const axsiosTrending = async () => {
      try {
        const data = await API.getTrending('all/day');
        setTrendingFilms(data);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosTrending();
  }, []);

  return (
    <Slider {...settings}>
      {trendingFilms?.results.map(
        ({
          backdrop_path,
          poster_path,
          id,
          title,
          name,
          overview,
          release_date,
          first_air_date,
          vote_average,
        }) => (
          <Banner
            key={id}
            backdrop_path={backdrop_path}
            poster_path={poster_path}
            title={title === undefined ? name : title}
            description={overview}
          >
            <div className="slider__relize">
              <Rating
                name="read-only"
                max={10}
                value={vote_average}
                size="small"
                readOnly
                className="reating"
              />
              <p>
                {release_date === undefined ? first_air_date : release_date}
              </p>
            </div>
          </Banner>
        )
      )}
    </Slider>
  );
};
export { SliderBannerFilm };
