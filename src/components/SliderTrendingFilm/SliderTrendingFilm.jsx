import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import css from './SliderTrendingFilm.module.css';
import * as API from 'service/api';

export default function SliderTrendingFilm() {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const [trendingFilms, setTrendingFilms] = useState();
  useEffect(() => {
    const axsiosTrending = async () => {
      const data = await API.getTrending();
      setTrendingFilms(data);
    };
    axsiosTrending();
  }, []);
  console.log(trendingFilms);

  console.log();
  return (
    <Slider {...settings}>
      {trendingFilms?.results.map(
        ({ backdrop_path, id, title, name, overview }) => {
          console.log(name, title);
          return (
            <div key={id} className={css.slider__card}>
              <div className={css.wrapp}>
                <img src={BASE_URL + backdrop_path} alt={title} />
                <div className={css.slider__info}>
                  <h1>{title === undefined ? name : title}</h1>
                  <p>{overview}</p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </Slider>
  );
}
