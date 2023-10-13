import Slider from 'react-slick';
import { Container } from '@mui/material';
import { TitlePopularWeek } from './PopularWeek.module';

const PopularWeek = ({ children, title }) => {
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
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

export { PopularWeek };
