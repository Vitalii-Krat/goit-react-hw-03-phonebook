import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';

import { ContactsListBtn, ContactsListItem } from './ContactList.styled';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <ContactsListItem>
      {contact.name}:{contact.number}
      <ContactsListBtn
        type="button"
        onClick={() => {
          onDeleteContact(contact);
        }}
      >
        Delete <TiDelete />
      </ContactsListBtn>
    </ContactsListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
