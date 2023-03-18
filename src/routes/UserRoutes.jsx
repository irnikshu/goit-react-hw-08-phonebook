// import RegisterPage from 'components/Pages/RegisterPage/RegisterPage';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '../shared/Loader/Loader';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';
// import Phonebook from '../components//Phonebook/Phonebook';

const RegisterPage = lazy(() =>
  import('../components/Pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../components/Pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() =>
  import('../components/Pages/NotFoundPage/NotFoundPage')
);
// const HomePage = lazy(() => import('../components/Pages/HomePage/HomePage'));
const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/" element={HomePage} /> */}
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
