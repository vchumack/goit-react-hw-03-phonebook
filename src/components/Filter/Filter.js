import React from 'react';
// import PropTypes from 'prop-types';

export const Filter = ({ changeInput }) => {
  return (
    <label>
      Find contacts by Name
      <input type="text" name="filter" onChange={changeInput}></input>
    </label>
  );
};

// Filter.propTypes = {};
