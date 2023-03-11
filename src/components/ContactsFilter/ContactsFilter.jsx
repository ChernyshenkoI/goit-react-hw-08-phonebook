import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const ContactsFilter = ({ filter, onChange }) => {
  return (
    <Wrapper>
      <TextField
        label="Find contact by name"
        name="filter"
        onChange={onChange}
        value={filter}
      />
    </Wrapper>
  );
};

export default ContactsFilter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 10px;
`;
