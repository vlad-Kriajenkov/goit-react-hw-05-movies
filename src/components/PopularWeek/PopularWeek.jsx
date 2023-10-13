import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import * as API from 'service/api';
import { Container } from '@mui/material';
import { nanoid } from 'nanoid';
import { TitlePopularWeek } from './PopularWeek.module';
import { CardDesktop } from 'components/CardFilm';

const PopularWeek = () => {
  const [trendingFilms, setTrendingFilms] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '70px',
          slidesToShow: 1,

          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const axsiosTrending = async () => {
      const data = await API.getTrending('movie/day');
      setTrendingFilms(data);
    };
    axsiosTrending();
  }, []);

  return (
    <Container maxWidth="xl" style={{ marginTop: '30px' }}>
      <TitlePopularWeek>Popular of the week</TitlePopularWeek>
      <Slider {...settings}>
        {trendingFilms?.results.map(val => (
          <CardDesktop key={nanoid()} item={val} />
        ))}
      </Slider>
    </Container>
  );
};

export { PopularWeek };
