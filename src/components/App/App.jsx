import Layout from 'components/Layout/Layout';
import { Home } from 'page/Home/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:id" element={<div>MoviesID</div>} />
      </Route>
    </Routes>
  );
};
