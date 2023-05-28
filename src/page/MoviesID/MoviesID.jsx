import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import * as API from 'service/api';
import {
  ConatinerMoviesID,
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
      <ConatinerMoviesID>
        <ImgFilm src={BASE_URL + backdrop_path} alt="" />
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
      </ConatinerMoviesID>
    </div>
  );
}
