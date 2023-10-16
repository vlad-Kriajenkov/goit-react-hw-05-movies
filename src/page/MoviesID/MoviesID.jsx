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
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Credits, Reviews } from 'components';

export default function MoviesID(params) {
  const [movieDetail, setMovieDetail] = useState('');
  const [infoCredits, setInfoCredits] = useState(false);
  const [infoReviews, setInfoReviews] = useState(false);
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const { id, media_type } = useParams();

  useEffect(() => {
    const axsiosMovieDetail = async () => {
      try {
        if (media_type === 'tv') {
          const data = await API.getTVDetails(`${id}`);
          setMovieDetail(data);
        } else {
          const data = await API.getMovieDetails(`${id}`);
          setMovieDetail(data);
        }
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosMovieDetail();
  }, [id, media_type]);
  const handleInfoCreditsReviews = name => {
    if (name === 'Credits') {
      setInfoCredits(true);
      setInfoReviews(false);
    } else if (name === 'Reviews') {
      setInfoCredits(false);
      setInfoReviews(true);
    }
  };
  const { backdrop_path, original_title, overview, original_name } =
    movieDetail;
  return (
    <div>
      <ContainerMoviesID>
        {backdrop_path === null ? (
          <img src={hero} alt="hero" />
        ) : (
          <ImgFilm src={BASE_URL + backdrop_path} alt="backdrop" />
        )}
        <WrapperInfo>
          <Title>
            {original_title === undefined ? original_name : original_title}
          </Title>
          <Text>{overview}</Text>
          <WrapperBtn>
            <button onClick={() => handleInfoCreditsReviews('Credits')}>
              Credits
            </button>
            <button onClick={() => handleInfoCreditsReviews('Reviews')}>
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
