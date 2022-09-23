import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
	Input,
	FormContacts,
	ErrorText,
	Label,
	Button,
	BtnBox,
} from './ContactForm.styled';

const FormError = ({ name }) => {
	return (
		<ErrorMessage
			name={name}
			render={messege => <ErrorText>{messege}</ErrorText>}
		/>
	);
};

const schema = yup.object().shape({
	name: yup.string().min(3).required(),
	number: yup.string().min(5).required(),
});

export function ContactForm({ submitForm }) {
	const id = nanoid();

	const initialValues = {
		name: '',
		number: '',
	};

	const handleSubmit = ({ name, number }, { resetForm }) => {
		const newContact = {
			id,
			name,
			number,
		};

		console.log(newContact);
		submitForm(newContact);
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={handleSubmit}
		>
			<FormContacts>
				<Label>
					name
					<Input
						type="text"
						name="name"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
					<FormError name="name" title="title" />
				</Label>
				<Label>
					number
					<Input
						type="tel"
						name="number"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<FormError name="number" title="title" />
				</Label>
				<BtnBox>
					<Button type="submit">Add contact</Button>
				</BtnBox>
			</FormContacts>
		</Formik>
	);
}

ContactForm.propTypes = {
	submitForm: PropTypes.func.isRequired,
};
