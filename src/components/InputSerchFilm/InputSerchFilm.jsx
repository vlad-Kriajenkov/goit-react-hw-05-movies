import { useState } from 'react';
import * as API from 'service/api';
import './InputSerchFilm.css';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

export default function InputSerchFilm(params) {
  const [nameFilm, setNameFilm] = useState();
  const [film, setFilm] = useState();

  const axsiosSearchFilms = async () => {
    const data = await API.searchFilm(nameFilm);
    setFilm(data);
  };

  const onHandelChange = e => {
    const value = e.target.value;

    setNameFilm(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    axsiosSearchFilms();

    setNameFilm('');
  };
console.log(film);
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 300, marginRight: 5 }}
    >
      <InputBase
        className="search__input"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={nameFilm}
        onChange={onHandelChange}
      ></InputBase>

      <IconButton
        disabled={nameFilm === undefined || nameFilm === '' ? true : false}
        type="submit"
        onClick={onSubmit}
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <NavLink to="/movies">
          <SearchIcon />
        </NavLink>
      </IconButton>
    </Paper>
  );
}
