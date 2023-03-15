import { authSignUp } from '../../../redux/auth/auth-operation';

import { useDispatch } from 'react-redux';
// import { Novigate } from 'react-router-dom';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
// import { isUserLogin } from '../../../redux/auth/auth-selector';

const RegisterPage = () => {
  // const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleSignUp = data => {
    dispatch(authSignUp(data));
  };
  // if (isLogin) {
  //   return <Novigate to="" />;
  // }
  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignUp} />
    </div>
  );
};

export default RegisterPage;
