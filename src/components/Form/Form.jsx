import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm, ContactsFormBtn, Input } from './Form.styled';
import PropTypes from 'prop-types';
import { HiOutlineUserAdd } from 'react-icons/hi';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChangeName = e => {
    const stateName = e.target.name;
    this.setState({
      [stateName]: e.target.value,
    });
  };

  handlerSubmitUser = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.resetName();
  };

  resetName = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const handlerChangeName = this.handlerChangeName;
    const { name, number } = this.state;

    return (
      <ContactsForm onSubmit={this.handlerSubmitUser}>
        <label>
          Name *
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handlerChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number *
          <Input
            type="tel"
            name="number"
            placeholder="+380*********"
            value={number}
            onChange={handlerChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <ContactsFormBtn type="submit">
          Add contact <HiOutlineUserAdd />{' '}
        </ContactsFormBtn>
      </ContactsForm>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
