import { login } from '../../../redux/auth/auth-operation';

import { useDispatch } from 'react-redux';
// import { Novigate } from 'react-router-dom';

// import { isUserLogin } from '../../../redux/auth/auth-selector';
import LoginForm from '../../LoginForm/LoginForm';

const LoginPage = () => {
  // const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  // if (isLogin) {
  //   return <Novigate to="" />;
  // }
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
