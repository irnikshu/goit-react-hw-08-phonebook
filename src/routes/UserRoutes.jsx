import RegisterPage from 'components/Pages/RegisterPage/RegisterPage';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '../shared/Components/Loader/Loader';

const RegisterPage = lazy(() =>
  import('../components/Pages/RegisterPage/RegisterPage')
);
const NotFoundPage = lazy(() =>
  import('../components/Pages/NotFoundPage/NotFoundPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
