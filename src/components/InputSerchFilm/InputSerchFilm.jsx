import React, { useState } from 'react';
import { Container } from './InputSerchFilm.styled';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';

const InputSerchFilm = ({ handleMenu }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleMenu();
    navigate(`/movies?name=${searchValue}`);
  };

  return (
    <Container>
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
        onClick={handleSubmit}
        sx={{ p: '2px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Container>
  );
};
export { InputSerchFilm };
