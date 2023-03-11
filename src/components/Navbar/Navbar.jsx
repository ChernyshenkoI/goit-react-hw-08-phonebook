import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';

import { getAuth } from 'redux/authRedux/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import UserAuth from 'components/UserMenu/UserAuth';

const Navbar = () => {
  const isLogin = useSelector(getAuth);

  return (
    <>
      <Container>
        <Wrapper>
          <Button size="large" to="/" component={Link}>
            Home
          </Button>

          {isLogin && (
            <Button size="large" to="/contacts" component={Link}>
              Contacts
            </Button>
          )}
        </Wrapper>
        {isLogin ? <UserMenu /> : <UserAuth />}
      </Container>
      <hr />
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
