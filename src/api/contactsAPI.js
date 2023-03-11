import instance from './authAPI';

export const getContacts = async () => {
  const { data } = await instance.get('contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await instance.post(`contacts`, contact);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data.id;
};
