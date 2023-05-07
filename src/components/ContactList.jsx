import React from "react";
import PropTypes from "prop-types";

function ContactList({ contacts, onContactDelete }) {
  const handleDeleteClick = (id) => {
    onContactDelete(id);
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}{" "}
          <button onClick={() => handleDeleteClick(contact.id)}>Delete</button>
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
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
