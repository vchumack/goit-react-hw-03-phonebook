import React, { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitlePhonebook, SecondTitlePhonebook } from './App.styled'
import { Report } from 'notiflix/build/notiflix-report-aio';


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
    // console.log('e.currentTarget-- ', e.currentTarget);
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  setValueSubmitForm = data => {
    if (this.checkAddingContacts(data.name)) {
      Report.info(`${data.name} is already in contacts`);
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

  // вызывается 1 раз при маунте компонента
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('myContactList'));
    console.log('parsedContacts', parsedContacts);

    if (parsedContacts && parsedContacts.length>0) {
      this.setState({ contacts: parsedContacts });
    } else
    {
      
      }
    
  }
// вызывается после каждого обновления
  componentDidUpdate(_, prevState) {
    console.log('componentDidUpdate');
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(this.state);

    // проверка обязательна на обновления стейта, иначе зациклим компонент
    const { contacts } = this.state;
    
    if (contacts !== prevState.contacts) {
      console.log('обновилось поле');

      localStorage.setItem('myContactList', JSON.stringify(contacts));
    }
  }

  render() {

    const visibleContacts = this.filterContacts();

    // console.log('this.state render -- ', this.state);
    return (
      <Box
        width="800px"
        pb={2}
        pt={2}
        pl={6}
        pr={6}
        ml='auto'
        mr='auto'
        mt={5}
        mb={5}
        minHeight='1000px'
        borderRadius='10px'
        boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
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
