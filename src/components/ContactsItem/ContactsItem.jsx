import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { Chip } from '@mui/material';

const ContactsItem = ({ name, number, id, onClick }) => {
  const [disabledId, setDisabledId] = useState('');
  const isLoading = useSelector(state => state.contacts.loading);

  const isDeleting = () => {
    if (isLoading) {
      return disabledId === id;
    }
  };
  return (
    <StyledItem>
      <span>
        {name}: {number}{' '}
        <Chip
          label="Delete"
          disabled={isDeleting()}
          onClick={() => {
            onClick(id);
            setDisabledId(id);
          }}
          icon={<DeleteIcon />}
        />
      </span>
    </StyledItem>
  );
};

export default ContactsItem;

const StyledItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
