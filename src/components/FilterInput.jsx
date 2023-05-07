import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/contactSlice';
import ContactList from './ContactList';

function FilterInput() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const contacts = useSelector((state) => state.contacts);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    dispatch(updateFilter(inputValue));
  };

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
      {filter && <ContactList contacts={filteredContacts} />}
    </div>
  );
}

export default FilterInput;
