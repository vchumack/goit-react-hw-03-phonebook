import React from 'react';
// import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteBtn }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteBtn(id)}>
        X
      </button>
    </li>
  );
};

// ContactItem.propTypes = {};
