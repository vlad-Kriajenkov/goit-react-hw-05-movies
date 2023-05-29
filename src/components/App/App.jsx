import Credits from 'components/Credits/Credits';
import Layout from 'components/Layout/Layout';
import { Home } from 'page/Home/Home';
import Movice from 'page/Movice/Movice';
import MoviesID from 'page/MoviesID/MoviesID';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movice />} />
        <Route path="movies/:id" element={<MoviesID />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
