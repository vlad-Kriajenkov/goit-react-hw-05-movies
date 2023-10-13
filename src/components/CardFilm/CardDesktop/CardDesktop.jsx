import React from 'react';
import {
  ContainerCard,
  Img,
  WrapperInfo,
  NameFilm,
  StatFilm,
} from './CardDesktop.styled';
import { Card } from '../Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

import { Link } from 'react-router-dom';

const CardDesktop = val => {
  const { id, poster_path, title, vote_average, media_type } = val.item;

  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFCD1A',
      },
    },
  });

  return (
    <Card width={'fit-content'}>
      <ContainerCard>
        <ThemeProvider theme={theme}>
          <Link to={`movies/${id}`}>
            <Img src={BASE_URL + poster_path} alt={title} />
            <WrapperInfo>
              <NameFilm>{title}</NameFilm>
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
