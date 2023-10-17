import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoadImageBanner = ({ poster_path, title, backdrop_path }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      {isTablet ? (
        <LazyLoadImage src={BASE_URL + poster_path} alt={title} effect="blur" />
      ) : (
        <LazyLoadImage
          src={BASE_URL + backdrop_path}
          alt={title}
          effect="blur"
        />
      )}
    </>
  );
};

export { LazyLoadImageBanner };
