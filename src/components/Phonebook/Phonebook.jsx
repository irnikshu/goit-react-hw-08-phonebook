import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../components/Form/Form';
import ContactsList from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../redux/contacts/contacts-operations';

import styles from './Phonebook.module.scss';

import { setFilter } from '../../redux/filter/filter-slice';

import { getVisibleContact } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import '../../shared/Styles/styles.scss';

const Phonebook = () => {
  const filteredContacts = useSelector(getVisibleContact);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts?.length);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Phonebook</h2>
      <Form onSubmit={handleAddContact} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      {isContacts && (
        <ContactsList
          items={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      )}

      {!isContacts && <p>No contacts in list</p>}
    </div>
  );
};

export default Phonebook;
