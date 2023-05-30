import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as API from 'service/api';
import css from './Movice.module.css';
import { Container } from '@mui/material';
import coverNotFound from 'images/coverNotFound.png';
import hero from 'images/hero.png';
import StatusNotification from 'components/StatusNotification/StatusNotification';

export default function Movice() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [nameFilm, setNameFilm] = useState('');

  const [films, setFilm] = useState();
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    setNameFilm(name);
  }, [name]);

  useEffect(() => {
    API.searchFilm(nameFilm)
      .then(respons => {
        setFilm(respons);
        console.log(respons);
      })
      .catch(error => console.log(error));
  }, [nameFilm, location.search.langth]);

  return (
    <div>
      <img src={hero} alt="back" className={css.back__img} />
      <Container maxWidth="xl">
        {name === null || films?.results.length === 0 ? (
          <StatusNotification text={'Search your film'} />
        ) : (
          <ul className={css.card__list}>
            {films?.results?.map(({ id, original_title, poster_path }) => (
              <li key={id} className={css.card__item}>
                <NavLink to={`${id}`} className={css.card__navlink}>
                  <img
                    src={
                      poster_path === null
                        ? coverNotFound
                        : BASE_URL + poster_path
                    }
                    className={css.card__poster}
                    alt="original_title"
                  />
                  <p className={css.card__name}>{original_title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}
