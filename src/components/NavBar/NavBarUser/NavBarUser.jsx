import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operation';

import { getUser } from '../../../redux/auth/auth-selector';
// import styles from './navbar-users.module.scss';

const NavBarUsers = () => {
  // const { name } = useSelector(getUser);
  const { email } = useSelector(getUser);

  // const user = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {email}, <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavBarUsers;
