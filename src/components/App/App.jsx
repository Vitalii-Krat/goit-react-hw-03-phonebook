import { Component } from 'react';
import { Container, Title } from './App.styled';
import Filter from '../Filter';
import Form from '../Form';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contacts);
    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handlerSubmitUserForm = contact => {
    this.state.contacts.some(
      contactItem =>
        contactItem.name.toLocaleLowerCase() ===
        contact.name.toLocaleLowerCase(),
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
    this.resetFilter();
  };

  handlerFilterName = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterVisibleContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  handlerDeleteContact = name => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== name.id),
    }));
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const visibleContacts = this.filterVisibleContacts();
    const { filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handlerSubmitUserForm} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handlerFilterName} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.handlerDeleteContact}
        />
      </Container>
    );
  }
}
export default App;
