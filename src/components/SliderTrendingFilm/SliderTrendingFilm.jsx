import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import './SliderTrendingFilm.css';
import * as API from 'service/api';
import { Rating } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SliderTrendingFilm = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const [trendingFilms, setTrendingFilms] = useState();

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
          id,
          title,
          name,
          overview,
          release_date,
          first_air_date,
          vote_average,
        }) => (
          <div key={id} className="slider__card">
            <div className="wrapp">
              <img src={BASE_URL + backdrop_path} alt={title} />

              <div className="slider__info">
                <h1 className="slider__title">
                  {title === undefined ? name : title}
                </h1>
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

                <p className="slider__text">{overview}</p>
              </div>
            </div>
          </div>
        )
      )}
    </Slider>
  );
};
export { SliderTrendingFilm };
