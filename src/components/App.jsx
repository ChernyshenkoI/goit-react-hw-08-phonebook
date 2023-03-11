import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import PrivateRoute from 'service/PrivateRoute';
import PublicRoute from 'service/PublicRoute';

import { getRefreshing } from 'redux/authRedux/authSelectors';
import { refresh } from 'redux/authRedux/authOperations';

import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import Navbar from './Navbar/Navbar';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Wrapper>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Container>
      </Wrapper>
    )
  );
};

export default App;

const Container = styled.div`
  margin: 0 40px;
`;

const Wrapper = styled.div`
  padding-top: 10px;
  background: linear-gradient(to bottom right, #bdc3c7, #2c3e50);
  min-height: 100vh;
`;
