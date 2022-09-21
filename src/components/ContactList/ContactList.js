import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { UlContactList } from './ContactList.styled';

export const ContactList = ({ contacts, deleteBtn }) => {
	return (
		<UlContactList>
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
		</UlContactList>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
	deleteBtn: PropTypes.func.isRequired,
};
