import React, { useEffect, useState } from 'react';
import {
  Container,
  WrapperInput,
  WrapperFilmsCard,
  Link,
  Poster,
  NameFilm,
} from './InputSerchFilm.styled';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { nanoid } from 'nanoid';
import * as API from 'service/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const InputSerchFilm = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const [searchValue, setSearchValue] = useState('');
  const [filmsArray, setFilmsArray] = useState();

  useEffect(() => {
    const serchFilm = async () => {
      try {
        const data = await API.searchFilm(searchValue);
        console.log(data);
        setFilmsArray(data);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    serchFilm();
  }, [searchValue]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };
  const onCloseSerch = () => {
    setSearchValue('');
  };
  return (
    <Container>
      <WrapperInput>
        <InputBase
          className="search__input"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
        ></InputBase>

        <IconButton
          disabled={
            searchValue === undefined || searchValue === '' ? true : false
          }
          type="submit"
          sx={{ p: '2px' }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </WrapperInput>
      {searchValue.length >= 1 && (
        <WrapperFilmsCard onClick={onCloseSerch}>
          {filmsArray?.results?.map(
            ({
              id,
              poster_path,
              title,
              vote_average,
              media_type = 'movie',
              name,
            }) => (
              <Link key={nanoid()} to={`movies/${id}/${media_type}`}>
                <Poster>
                  <LazyLoadImage
                    src={BASE_URL + poster_path}
                    alt={title}
                    effect="blur"
                  />
                </Poster>
                <NameFilm> {title}</NameFilm>
              </Link>
            )
          )}
        </WrapperFilmsCard>
      )}
    </Container>
  );
};
export { InputSerchFilm };
