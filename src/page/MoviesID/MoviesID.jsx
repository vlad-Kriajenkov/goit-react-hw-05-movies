import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import * as API from 'service/api';
import hero from 'images/hero.png';
import {
  ContainerMoviesID,
  WrapperInfo,
  Title,
  Text,
  ImgFilm,
  Nav,
} from './MoviesID.stuled';
import { Container } from '@mui/material';

export default function MoviesID(params) {
  const [movieDetail, setMovieDetail] = useState('');
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const { id } = useParams();

  useEffect(() => {
    const axsiosMovieDetail = async () => {
      const data = await API.getMovieDetails(`${id}`);
      setMovieDetail(data);
    };
    axsiosMovieDetail();
  }, [id]);

  const { backdrop_path, original_title, overview } = movieDetail;
  return (
    <div>
      <ContainerMoviesID>
        {backdrop_path === null ? (
          <img src={hero} alt="hero" />
        ) : (
          <ImgFilm src={BASE_URL + backdrop_path} alt="backdrop" />
        )}
        <WrapperInfo>
          <Title>{original_title}</Title>
          <Text>{overview}</Text>
          <Nav>
            <NavLink to="credits">Credits</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </Nav>
        </WrapperInfo>

        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </ContainerMoviesID>
    </div>
  );
}
