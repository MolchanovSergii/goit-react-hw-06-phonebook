import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/store';

import { StyledButton } from '../ContactForms/ContactForms.styled';
import { StyledContactList, StyledContactItem } from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <StyledContactList>
        {contactsList.map(({ id, name, number }) => (
          <StyledContactItem key={id}>
            {name} : {number}
            <StyledButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </StyledButton>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </>
  );
};

export default ContactList;
