import Slider from 'react-slick';
import { LoaderCard } from 'Loader';
import { CardDesktop } from 'components';
import { Container } from '@mui/material';
import { TitlePopularWeek } from './PopularWeek.module';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const PopularWeek = ({ children, title, isLoading, trendingArray }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const [handleContainer, sethandleContainer] = useState(false);

  useEffect(() => {
    isMobile ? sethandleContainer(true) : sethandleContainer(false);
  }, [isMobile]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 425,
        settings: {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '70px',
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <Container
      maxWidth="xl"
      disableGutters={handleContainer}
      style={{ marginTop: '30px' }}
    >
      <TitlePopularWeek>{title}</TitlePopularWeek>
      <Slider {...settings}>
        {trendingArray?.results.map(
          ({
            id,
            poster_path,
            title,
            vote_average,
            media_type = 'movie',
            name,
          }) =>
            isLoading ? (
              <LoaderCard key={nanoid()} />
            ) : (
              <NavLink key={nanoid()} to={`movies/${id}/${media_type}`}>
                <CardDesktop
                  id={id}
                  poster_path={poster_path}
                  title={title}
                  vote_average={vote_average}
                  media_type={media_type}
                  name={name}
                  key={nanoid()}
                />
              </NavLink>
            )
        )}
      </Slider>
    </Container>
  );
};

export { PopularWeek };
