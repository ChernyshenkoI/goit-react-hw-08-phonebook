import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`);
  }
  instance.defaults.headers.common['Authorization'] = '';
};

export const signupUser = async data => {
  const { data: response } = await instance.post('users/signup', data);
  setToken(response.token);

  return response;
};

export const loginUser = async data => {
  const { data: response } = await instance.post('users/login', data);
  setToken(response.token);

  return response;
};

export const logoutUser = async () => {
  const { data } = await instance.post('users/logout');
  setToken();

  return data;
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await instance.get('users/current');
  return data;
};

export default instance;
