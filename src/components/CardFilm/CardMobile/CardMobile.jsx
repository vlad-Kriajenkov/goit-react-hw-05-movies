import React from 'react';
import { Card } from '../Card';
import { Link } from 'react-router-dom';

const CardMobile = ({ id, poster_path, title, widthImg }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <Card width={'fit-content'}>
      <Link to={`movies/${id}`}>
        <img
          src={BASE_URL + poster_path}
          alt={title}
          style={{ width: `${widthImg}` }}
        />
      </Link>
    </Card>
  );
};

export { CardMobile };
