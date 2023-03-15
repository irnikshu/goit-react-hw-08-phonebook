import { useSelector } from 'react-redux';

import { getUser } from '../../../redux/auth/auth-selector';
// import styles from './navbar-users.module.scss';

const NavBarUsers = () => {
  const { name } = useSelector(getUser);

  return (
    <div>
      {name}, <button>Logout</button>
    </div>
  );
};

export default NavBarUsers;
