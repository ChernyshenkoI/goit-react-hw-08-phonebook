export const getAuth = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getError = ({ auth }) => auth.error;
export const getRefreshing = ({ auth }) => auth.isRefreshing;
