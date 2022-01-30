import PropTypes from 'prop-types';
import { FormLabel, FormInput } from './Filter.Styled';
import { MdPersonSearch } from 'react-icons/md';

const Filter = ({ value, onChange }) => (
  <FormLabel>
    <MdPersonSearch />
    <FormInput
      type="text"
      placeholder="Find contact by name"
      name="filter"
      value={value}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    />
  </FormLabel>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
