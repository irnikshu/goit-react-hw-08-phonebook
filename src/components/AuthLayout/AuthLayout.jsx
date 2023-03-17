import { useDispatch } from 'react-redux';
import { current } from '../../redux/auth/auth-operation';
import { useEffect } from 'react';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
