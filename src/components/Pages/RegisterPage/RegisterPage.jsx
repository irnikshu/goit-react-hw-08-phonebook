import { authSignUp } from '../../../redux/auth/auth-operation';

import { useDispatch } from 'react-redux';

import RegisterForm from '../../../components/RegisterForm/RegisterForm';

import { Box } from '@mui/material';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignUp = data => {
    dispatch(authSignUp(data));
  };

  return (
    <Box
      sx={{
        
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: '40px',
      }}
    >
      <RegisterForm onSubmit={handleSignUp} />
    </Box>
  );
};

export default RegisterPage;
