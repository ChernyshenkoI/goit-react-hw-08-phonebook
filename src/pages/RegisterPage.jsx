import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { styled as styledMui } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

import { register } from 'redux/authRedux/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });

  return (
    <Container>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          variant="standard"
          type="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          autoComplete="off"
        ></TextField>
        <br />
        <TextField
          label="Email"
          variant="standard"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          autoComplete="off"
        ></TextField>
        <br />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        ></TextField>

        <StyledBtn variant="contained" type="submit" width="200px">
          Register
        </StyledBtn>
      </StyledForm>
    </Container>
  );
};

export default RegisterPage;

const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background: RGB(189, 195, 199);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const StyledBtn = styledMui(Button)`
  margin-top: 15px;
`;
