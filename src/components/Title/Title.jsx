import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
`;

Title.propTypes = {
  title: PropTypes.string,
};
