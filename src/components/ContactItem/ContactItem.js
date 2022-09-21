import React from 'react';
import { LiContactItem, BtnDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteBtn }) => {
	return (
		<LiContactItem>
			{name}: {number}
			<BtnDelete type="button" onClick={() => deleteBtn(id)}></BtnDelete>
		</LiContactItem>
	);
};

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	deleteBtn: PropTypes.func.isRequired,
};
