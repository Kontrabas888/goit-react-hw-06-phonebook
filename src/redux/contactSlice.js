import { createAction, createSlice } from '@reduxjs/toolkit';

export const register = createAction('REGISTER');

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register, (state, action) => {
      const { key } = action.payload;
      state.contacts.push({ id: state.contacts.length + 1, name: key });
    });
  },
});

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;

export default contactSlice.reducer;
