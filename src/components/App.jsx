import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  id = nanoid();
 

  handleChangeInput = e => {
    console.log('e.currentTarget-- ', e.currentTarget);
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.checkAddingContacts()) {
      alert (`${name} is already in contacts`);
      return;
    }
    

    console.log('id  nanoid -- ', this.id);

    const newContact = {
      id: this.id,
      name,
      number,
    };

    console.log('newContact -- ', newContact);

    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
    this.reset();
  };

  checkAddingContacts = () => {
    const checkName = this.state.contacts.find(el => el.name.toLowerCase() === this.state.name.toLowerCase())

    return checkName;
  }

  handleDeleteBtnClick = (id) => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) })
    
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const lowerFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(lowerFilter);
    });

    console.log('this.state render -- ', this.state);
    return (
      <Box
        width="700px"
        pb={2}
        pt={2}
        ml="auto"
        mr={'auto'}
        mt={5}
        mb={5}
        bg="primaryBg"
      >
        <h1>Phonebook</h1>
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
        <h2>Contacts</h2>
        <label>
          Find contacts by Name
          <input
            type="text"
            name="filter"
            onChange={this.handleChangeInput}
          ></input>
        </label>
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button type='button' onClick={() => this.handleDeleteBtnClick(id)}>X</button>
            </li>
          ))}
        </ul>
      </Box>
    );
  }
}
