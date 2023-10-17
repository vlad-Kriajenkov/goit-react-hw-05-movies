import React from 'react';
import { Card } from '../Card';

const CardMobile = ({ id, poster_path, title, widthImg }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <Card width={'fit-content'}>
      <img
        src={BASE_URL + poster_path}
        alt={title}
        style={{ width: `${widthImg}` }}
      />
    </Card>
  );
};

export { CardMobile };
