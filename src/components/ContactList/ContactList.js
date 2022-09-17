import React from 'react';
// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';

export const ContactList = ({ contacts, deleteBtn }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteBtn={deleteBtn}
          />
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {};
