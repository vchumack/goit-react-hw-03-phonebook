import React, { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import {TitlePhonebook, SecondTitlePhonebook} from './App.styled'


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  handleChangeInputFilter = e => {
    console.log('e.currentTarget-- ', e.currentTarget);
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  setValueSubmitForm = data => {
    if (this.checkAddingContacts(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [data, ...contacts],
      };
    });
  };

  checkAddingContacts = (name) => {
    const checkName = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    return checkName;
  };

  filterContacts = () => {
    const lowerFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(lowerFilter);
    });
  };

  handleDeleteBtnClick = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };

  render() {

    const visibleContacts = this.filterContacts();

    console.log('this.state render -- ', this.state);
    return (
      <Box
        width="800px"
        pb={2}
        pt={2}
        pl={6}
        pr={6}
        ml="auto"
        mr={'auto'}
        mt={5}
        mb={5}
        bg="primaryBg"
      >
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm submitForm={this.setValueSubmitForm } />
        <SecondTitlePhonebook>Contacts</SecondTitlePhonebook>
        <Filter changeInput={this.handleChangeInputFilter} />
        <ContactList contacts={visibleContacts} deleteBtn={ this.handleDeleteBtnClick} />
      </Box>
    );
  }
}
