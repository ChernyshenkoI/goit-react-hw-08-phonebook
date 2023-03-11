import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { signupUser, loginUser, logoutUser, refreshUser } from 'api/authAPI';

export const register = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await signupUser(data);
      return response;
    } catch ({ response }) {
      if (response.data.message) {
        Notify.failure('The password is too short (minimum 7 characters). ');
      } else {
        Notify.failure(
          'A user with this email already exists. Try logging in. '
        );
      }
      return rejectWithValue(response.statusText);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginUser(data);
      return response;
    } catch ({ response }) {
      Notify.failure('Wrong email or password, pls try again');
      return rejectWithValue(response.statusText);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await logoutUser();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const { token } = auth;
    if (token === '') {
      return rejectWithValue(null);
    }
    try {
      const response = await refreshUser(token);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
