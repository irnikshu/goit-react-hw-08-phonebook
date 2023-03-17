import { authSignUp } from '../../../redux/auth/auth-operation';

import { useDispatch } from 'react-redux';

import RegisterForm from '../../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignUp = data => {
    dispatch(authSignUp(data));
  };

  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignUp} />
    </div>
  );
};

export default RegisterPage;
