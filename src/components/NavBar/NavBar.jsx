import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUsers from './NavBarUser/NavBarUser';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selector';

export const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <>
      {!isLogin && <NavBarAuth />}
      {isLogin && <NavBarUsers />}
    </>
  );
};
