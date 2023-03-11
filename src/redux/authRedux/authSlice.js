import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.loading = false;
      state.user = '';
      state.token = '';
      state.isLogin = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [refresh.pending]: state => {
      state.isRefreshing = true;
      state.loading = true;
      state.error = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      state.isRefreshing = false;
      state.loading = false;
      state.user = { ...payload };
      state.isLogin = true;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isRefreshing = false;
      state.loading = false;
      state.token = '';
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
