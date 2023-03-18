import { login } from '../../../redux/auth/auth-operation';

import { useDispatch } from 'react-redux';

import LoginForm from '../../LoginForm/LoginForm';

import { Box } from '@mui/material';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
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
     

      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};

export default LoginPage;
