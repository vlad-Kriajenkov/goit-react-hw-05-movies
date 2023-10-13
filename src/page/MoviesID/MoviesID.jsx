import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'service/api';
import hero from 'assets/images/Movies/hero.png';
import {
  ContainerMoviesID,
  WrapperInfo,
  Title,
  Text,
  ImgFilm,
  WrapperBtn,
} from './MoviesID.stuled';
import { Container } from '@mui/material';

import { Credits, Reviews } from 'components';

export default function MoviesID(params) {
  const [movieDetail, setMovieDetail] = useState('');
  const [infoCredits, setInfoCredits] = useState(false);
  const [infoReviews, setInfoReviews] = useState(false);
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const { id } = useParams();

  useEffect(() => {
    const axsiosMovieDetail = async () => {
      const data = await API.getMovieDetails(`${id}`);
      setMovieDetail(data);
    };
    axsiosMovieDetail();
  }, [id]);
  const handelInfoCreditsReviews = name => {
    if (name === 'Credits') {
      setInfoCredits(true);
      setInfoReviews(false);
    } else if (name === 'Reviews') {
      setInfoCredits(false);
      setInfoReviews(true);
    }
  };
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
          <WrapperBtn>
            <button onClick={() => handelInfoCreditsReviews('Credits')}>
              Credits
            </button>
            <button onClick={() => handelInfoCreditsReviews('Reviews')}>
              Reviews
            </button>
          </WrapperBtn>
        </WrapperInfo>

        <Container maxWidth="xl">
          {infoCredits ? <Credits /> : <></>}
          {infoReviews ? <Reviews id={id} /> : <></>}
        </Container>
      </ContainerMoviesID>
    </div>
  );
}
