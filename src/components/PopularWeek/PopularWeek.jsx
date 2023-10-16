import Slider from 'react-slick';
import { CardDesktop, Loader } from 'components';
import { Container } from '@mui/material';
import { TitlePopularWeek } from './PopularWeek.module';
import { nanoid } from 'nanoid';
const PopularWeek = ({ children, title, isLoading, trendingArray }) => {
  const settings = {
    dots: false,
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

  return (
    <Container maxWidth="xl" style={{ marginTop: '30px' }}>
      <TitlePopularWeek>{title}</TitlePopularWeek>
      <Slider {...settings}>
        {trendingArray?.results.map(val =>
          isLoading ? (
            <Loader key={nanoid()} />
          ) : (
            <CardDesktop item={val} key={nanoid()} />
          )
        )}
      </Slider>
    </Container>
  );
};

export { PopularWeek };
