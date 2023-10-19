import Layout from 'Layout/Layout';
import { LoaderWeb } from 'Loader';
import Home from 'page/Home/Home';

import MoviesID from 'page/MoviesID/MoviesID';
import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    window.onload = () => {
      setTimeout(() => {
        setIsLoader(false);
        document.body.style.overflow = `auto`;
      }, 2000);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:id/:media_type" element={<MoviesID />} />
        </Route>
      </Routes>
      {isLoader ? <LoaderWeb /> : <></>}
    </>
  );
};
