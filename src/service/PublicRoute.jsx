const { useSelector } = require('react-redux');
const { Navigate, Outlet } = require('react-router-dom');
const { getAuth } = require('redux/authRedux/authSelectors');

const PublicRoute = () => {
  const isLogin = useSelector(getAuth);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
