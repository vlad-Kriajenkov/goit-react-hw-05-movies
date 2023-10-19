import { CardBanner } from 'components/CardFilm';
import { LoaderCard } from 'Loader';
import React, { useEffect, useState } from 'react';
import * as API from 'service/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const PopularFilm = () => {
  const [trendingFilm, setTrendingFilm] = useState(null);
  const [isLoading, setIsLoiding] = useState(true);
  useEffect(() => {
    const axsiosTrending = async () => {
      try {
        const data = await API.getTrending('movie/day');
        setTrendingFilm(data.results[0]);
        setIsLoiding(false);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosTrending();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderCard height={600} />
      ) : (
        <CardBanner
          id={trendingFilm?.id}
          poster_path={trendingFilm?.poster_path}
          title={trendingFilm?.title}
          widthImg={'100%'}
        />
      )}
    </>
  );
};
export { PopularFilm };
