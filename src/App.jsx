import Layout from 'Layout/Layout';
import Home from 'page/Home/Home';
import Movice from 'page/Movice/Movice';
import MoviesID from 'page/MoviesID/MoviesID';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movice />} />
        <Route path="movies/:id/:media_type" element={<MoviesID />} />
      </Route>
    </Routes>
  );
};
