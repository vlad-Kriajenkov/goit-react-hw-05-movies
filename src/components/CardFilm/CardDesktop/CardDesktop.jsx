import React from 'react';
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
import { useMediaQuery } from 'react-responsive';
import notFoundPoster from 'assets/images/Loading/coverNotFound.png';
const CardDesktop = ({
  id,
  poster_path,
  title,
  vote_average,
  media_type,
  name,
}) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  
  const patchImg = poster_path ? BASE_URL + poster_path : notFoundPoster;
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFCD1A',
      },
    },
  });

  return (
    <Card>
      <ContainerCard >
        <ThemeProvider theme={theme}>
          <LazyLoadImage
            src={patchImg}
            alt={title}
            effect="blur"
           
          />
          <WrapperInfo>
            <NameFilm>{title === undefined ? name : title}</NameFilm>
            <StatFilm>
              <StarIcon sx={{ fontSize: 25 }} color="secondary" />
              {vote_average} | {media_type.toUpperCase()}
            </StatFilm>
          </WrapperInfo>
        </ThemeProvider>
      </ContainerCard>
    </Card>
  );
};

export { CardDesktop };
