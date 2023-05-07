import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteContact } from "../redux/contactSlice";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import FilterInput from "./FilterInput";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import "../redux/style.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const contacts = useSelector((state) => state.contacts);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Form" : "Add Contact"}
          </button>
          {showForm && <ContactForm />}
          <h2>Contacts</h2>
          <FilterInput />
          <ContactList
            contacts={contacts}
            onContactDelete={(id) => store.dispatch(deleteContact(id))}
          />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
