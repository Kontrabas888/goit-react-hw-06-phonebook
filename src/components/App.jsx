import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, updateFilter } from "../redux/contactSlice";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import FilterInput from "./FilterInput";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import "../redux/style.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const handleAddContact = (name, phone) => {
    dispatch(addContact({ name, phone }));
    setShowForm(false);
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Form" : "Add Contact"}
          </button>
          {showForm && <ContactForm onAddContact={handleAddContact} />}
          <h2>Contacts</h2>
          <FilterInput value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={contacts.filter((contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )}
            onDeleteContact={handleDeleteContact}
          />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
