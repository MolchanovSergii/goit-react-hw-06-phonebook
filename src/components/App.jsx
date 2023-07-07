import React, { useState, useEffect } from 'react';
import { StyledAppWrapper } from 'App.styled';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const KEY_CONTACTS = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(KEY_CONTACTS)) ?? [];
  });

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  const changeFilterData = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const renderFilterContacts = () => {
    const normalized = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <>
      <StyledAppWrapper>
        <h1>Phonebook</h1>
        <ContactForms />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilterData} />
        <ContactList dataUsers={renderFilterContacts()} />
      </StyledAppWrapper>
    </>
  );
};

export default App;
