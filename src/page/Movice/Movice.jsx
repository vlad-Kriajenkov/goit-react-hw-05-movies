import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as API from 'service/api';
 
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

  console.log(nameFilm, name);
  useEffect(() => {
    API.searchFilm(nameFilm)
      .then(respons => {
        setFilm(respons);
        console.log(respons);
      })
      .catch(error => console.log(error));
  }, [ nameFilm, location.search.langth]);

  return (
    <div>
      <img src={BASE_URL + '/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg'} alt="" />
      <div>
        {films?.results?.map(({ id, original_title, poster_path }) => (
          <NavLink key={id}>
            <div>
              <img src={BASE_URL + poster_path} alt="" />
              <p>{original_title}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
