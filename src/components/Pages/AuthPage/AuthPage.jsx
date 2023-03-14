import { NavLink } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink> |
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default AuthPage;
