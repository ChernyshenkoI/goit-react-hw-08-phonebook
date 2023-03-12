import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/authRedux/authSelectors';

export const PublicRoute = () => {
  const isAuth = useSelector(getAuth);
  return isAuth ? <Navigate to="/contacts" /> : <Outlet />;
};
