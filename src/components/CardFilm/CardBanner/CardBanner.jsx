import React from 'react';
import { Card } from '../Card';

const CardBanner = ({ id, poster_path, title, widthImg }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <Card width={'fit-content'} height={'545px'}>
      <img
        loading="lazy"
        src={BASE_URL + poster_path}
        alt={title}
        height={'545px'}
        style={{ width: `${widthImg}` }}
      />
    </Card>
  );
};

export { CardBanner };
