import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerCard,
  WrapperInfo,
  NameFilm,
  StatFilm,
} from './CardDesktop.styled';
import { Card } from '../Card';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImage from 'assets/images/home/BackgroundBlurs.png';

import { useMediaQuery } from 'react-responsive';

const CardDesktop = val => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const { id, poster_path, title, vote_average, media_type, name } = val.item;
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' }) ? 400 : 'auto';
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFCD1A',
      },
    },
  });

  return (
    <Card>
      <ContainerCard height={isMobile}>
        <ThemeProvider theme={theme}>
          <Link to={`movies/${id}/${media_type}`}>
            <LazyLoadImage
              src={BASE_URL + poster_path}
              alt={title}
              effect="blur"
              placeholdersrc={PlaceholderImage}
            />
            <WrapperInfo>
              <NameFilm>{title === undefined ? name : title}</NameFilm>
              <StatFilm>
                <StarIcon sx={{ fontSize: 25 }} color="secondary" />
                {vote_average} | {media_type.toUpperCase()}
              </StatFilm>
            </WrapperInfo>
          </Link>
        </ThemeProvider>
      </ContainerCard>
    </Card>
  );
};

export { CardDesktop };
