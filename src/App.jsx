import { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";

function App() {
  const [chart, setChart] = useState(null);

  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Header setChart={setChart} />

      {!!chart && (
        <Contacts
          chart={chart}
          setChart={setChart}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}

      <ContactList contacts={contacts} setContacts={setContacts} />
    </>
  );
}

export default App;
