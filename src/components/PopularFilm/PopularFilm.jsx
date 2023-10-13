import { CardMobile } from 'components/CardFilm';
import { Loader } from 'components/Loader';
import React, { useEffect, useState } from 'react';
import * as API from 'service/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const PopularFilm = () => {
  const [trendingFilm, setTrendingFilm] = useState(null);
  const [loading, setLoiding] = useState(false);
  useEffect(() => {
    setLoiding(true);

    const axsiosTrending = async () => {
      try {
        const data = await API.getTrending('movie/day');
        setTrendingFilm(data.results[0]);
        setLoiding(false);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosTrending();
  }, []);

  return (
    <Loader loading={loading}>
      <CardMobile
        id={trendingFilm?.id}
        poster_path={trendingFilm?.poster_path}
        title={trendingFilm?.title}
        widthImg={'100%'}
      />
    </Loader>
  );
};
export { PopularFilm };
