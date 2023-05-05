import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../redux/contactSlice';

function FilterInput({ value, onChange }) {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const inputValue = e.target.value;
    dispatch(updateFilter(inputValue));
    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default FilterInput;
