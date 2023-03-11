import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix';
import Contacts from 'components/Contacts/Contacts';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Title from 'components/Title/Title';

import { setFilter } from 'redux/contactsRedux/contactsActions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contactsRedux/contactsOperations';

const ContactsPage = () => {
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const onSubmitAddToContacts = useCallback(
    (name, number, form) => {
      const sameName = contacts?.find(contact => contact.name === name);
      if (sameName) {
        Notify.failure('This contact is already in your list');
        return form.reset();
      }

      const contact = {
        name,
        number,
      };

      dispatch(addContact(contact));
    },
    [contacts, dispatch]
  );

  const onInputChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const onClickDelete = idToDel => {
    dispatch(deleteContact(idToDel));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title title="Phonebook" />
      <ContactsForm onSubmit={onSubmitAddToContacts} />
      <Title title="Contacts" />
      <ContactsFilter onChange={onInputChange} filter={filter} />
      <Contacts
        onClick={onClickDelete}
        nameList={contacts?.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
      />
    </>
  );
};

export default ContactsPage;


