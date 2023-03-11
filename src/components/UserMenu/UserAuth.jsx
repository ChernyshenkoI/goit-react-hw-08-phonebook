import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Wrapper } from './UserMenu';

const UserAuth = () => {
  return (
    <Wrapper>
      <Button to="/register" variant="contained" component={StyledLink}>
        Register
      </Button>
      <Button to="/login" variant="contained" component={StyledLink}>
        Login
      </Button>
    </Wrapper>
  );
};

export default UserAuth;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:first-child {
    margin-right: 10px;
  }
`;
