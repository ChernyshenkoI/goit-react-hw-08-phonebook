const { useSelector } = require('react-redux');
const { Navigate, Outlet } = require('react-router-dom');
const { getAuth } = require('redux/authRedux/authSelectors');

const PrivateRoute = () => {
  const isLogin = useSelector(getAuth);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
