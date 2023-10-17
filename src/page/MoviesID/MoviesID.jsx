import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'service/api';
import {
  WrapBanner,
  NameFilm,
  Gradient,
  WrapperStory,
} from './MoviesID.stuled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LazyLoadImageBanner, Credits } from 'components';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container } from '@mui/material';

export default function MoviesID() {
  const [movieDetail, setMovieDetail] = useState('');
  const { id, media_type } = useParams();
  const {
    backdrop_path,
    poster_path,
    original_title,
    overview, 
  } = movieDetail;

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

  return (
    <div style={{ backgroundColor: 'black', paddingBottom: '20px' }}>
      <WrapBanner>
        <LazyLoadImageBanner
          poster_path={poster_path}
          backdrop_path={backdrop_path}
          title={original_title}
        />
        <Gradient></Gradient>
      </WrapBanner>
      <Container maxWidth="xl">
        <NameFilm>{original_title}</NameFilm>
        <WrapperStory>
          <h2>Story Line</h2>
          <p>{overview}</p>
        </WrapperStory>
        <Credits />
      </Container>
    </div>
  );
}
