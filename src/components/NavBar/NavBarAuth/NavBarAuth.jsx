import { NavLink } from 'react-router-dom';

import { Typography, Box } from '@mui/material';

import styles from './navbar-auth.module.scss';

const NavBarAuth = () => {
  return (
    <div>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '30px',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: '2.5rem', textAlign: 'center' }}
        >
          Welcome to Phonebook!
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', textAlign: 'center' }}>
          Sign up or log in to start using.
        </Typography>
      </Box>
      <div className={styles.nav}>
        <NavLink to="/register" className={styles.link}>
          Register
        </NavLink>{' '}
        |
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarAuth;
