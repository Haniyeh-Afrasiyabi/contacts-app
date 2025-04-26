import { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";

function App() {
  const [chart, setChart] = useState(null);

  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([]);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <Header setChart={setChart} />

      {!!chart && (
        <Contacts
          chart={chart}
          setChart={setChart}
          contacts={contacts}
          setContacts={setContacts}
          contact={contact}
          setContact={setContact}
        />
      )}

      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default App;
