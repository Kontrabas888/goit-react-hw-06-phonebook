import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addContact({ name, phone, id }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
