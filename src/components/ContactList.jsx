import React from "react";
import PropTypes from "prop-types";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}{" "}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

