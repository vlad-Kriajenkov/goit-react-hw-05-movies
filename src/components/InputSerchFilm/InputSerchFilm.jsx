import React, {  useState } from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';

// TODO : в пропс можно передать с другого компонента и записатьего в переменную вместо того что бы писать его в локал сторедж

const InputSerchFilm = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handelChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/movies?name=${searchValue}`);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 300,
        marginRight: 5,
      }}
    >
      <InputBase
        className="search__input"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={searchValue}
        onChange={handelChange}
      ></InputBase>

      <IconButton
        disabled={
          searchValue === undefined || searchValue === '' ? true : false
        }
        type="submit"
        onClick={handleSubmit}
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default InputSerchFilm;
