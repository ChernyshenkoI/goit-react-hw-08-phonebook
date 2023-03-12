
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/authRedux/authSelectors';

export const PrivateRoute = () => {
  const isAuth = useSelector(getAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
