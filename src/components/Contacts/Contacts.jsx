import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem/ContactsItem';

const Contacts = ({ nameList, onClick }) => {
  return (
    <ul>
      {nameList?.map(({ name, id, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onClick={onClick}
          id={id}
        />
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  nameList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};
