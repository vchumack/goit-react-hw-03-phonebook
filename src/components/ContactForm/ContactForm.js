import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {};

  id = nanoid();

  handleChangeInput = e => {
    console.log('e.currentTarget-- ', e.currentTarget);
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { name, number } = this.state;

    const newContact = {
      id: this.id,
      name,
      number,
    };

    console.log('newContact -- ', newContact);

    this.props.submitForm(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          name
          <input
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          number
          <input
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
