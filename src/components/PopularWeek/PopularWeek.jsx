import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import * as API from 'service/api';
import { Container, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  ContainerCard,
  Img,
  WrapperInfo,
  TitlePopularWeek,
  NameFilm,
  StatFilm,
} from './PopularWeek.module';

export default function PopularWeek() {
  const [trendingFilms, setTrendingFilms] = useState();
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFCD1A',
      },
    },
  });

  useEffect(() => {
    const axsiosTrending = async () => {
      const data = await API.getTrending('movie/day');
      setTrendingFilms(data);
    };
    axsiosTrending();
  }, []);
 
  return (
    <Container maxWidth="xl">
      <TitlePopularWeek>Popular of the week</TitlePopularWeek>
      <Slider {...settings}>
        {trendingFilms?.results.map(
          ({ id, poster_path, title, vote_average, media_type }) => (
            <div key={id}>
              <ContainerCard>
                <ThemeProvider theme={theme}>
                  <Img src={BASE_URL + poster_path} alt={title} />
                  <WrapperInfo>
                    <NameFilm>{title}</NameFilm>
                    <StatFilm>
                      <StarIcon sx={{ fontSize: 25 }} color="secondary" />
                      {vote_average} | {media_type.toUpperCase()}
                    </StatFilm>

                    <Link to={`movies/${id}`}>
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<InfoIcon />}
                      >
                        More Info
                      </Button>
                    </Link>
                  </WrapperInfo>
                </ThemeProvider>
              </ContainerCard>
            </div>
          )
        )}
      </Slider>
    </Container>
  );
}
