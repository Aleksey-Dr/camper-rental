import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container'
import Layout from 'components/Layout';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home/'));
const Catalog = lazy(() => import('pages/Catalog/'));
const Favorites = lazy(() => import('pages/Favorites/'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
