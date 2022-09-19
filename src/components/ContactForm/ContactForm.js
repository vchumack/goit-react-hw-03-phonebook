// import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
// import { FormContacts } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  // number: yup.string().phone().required(),
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
          <ErrorMessage name="name" />
        </Label>
        <Label>
          number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </Label>
        <BtnBox>
          <Button type="submit">Add contact</Button>
        </BtnBox>
      </FormContacts>
    </Formik>
  );
}

const Input = styled(Field)`
  display: block;
  width: 93%;
  margin: auto;
  padding: 13px;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  outline: none;
  border: 0;

  border-radius: 20px;

  font-family: 'Roboto', sans-serif;

  background: #c3f1f1;
  color: #553c9a;

  :-webkit-autofill {
    transition: all 5000s ease-in-out 0s;
  }
`;

const FormContacts = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  padding: 5px;
  font-size: 14px;
  font-weight: 700;

  color: #fff;
  opacity: 1;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  border: 1px solid #b393d3;

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  cursor: pointer;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

// const ErrMes = styled(ErrorMessage)`
//   color: red;
// `;
