import { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";
import { v4 } from "uuid";

function App() {
  const [chart, setChart] = useState(null);

  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [contacts, setContacts] = useState([]);

  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [searchTerm, setSearchTerm] = useState("");

  const [alert, setAlert] = useState(false);

  const [isBulkDeleting, setIsBulkDeleting] = useState(false);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const startEditing = (contact) => {
    setContact(contact);
    setEditingId(contact.id);
    setChart(true);
  };

  const saveContact = () => {
    if (
      !contact.name?.trim() ||
      !contact.lastName?.trim() ||
      !contact.email?.trim() ||
      !contact.phone?.trim()
    ) {
      setAlert("Please enter valid data!");
      return;
    }

    if (
      contact.name.length < 3 ||
      contact.lastName.length < 3 ||
      /\d/.test(contact.name) ||
      /\d/.test(contact.lastName)
    ) {
      setAlert("Name or Last name is not correct");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      setAlert("فرمت ایمیل وارد شده معتبر نیست!");
      return;
    }

    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(contact.phone)) {
      setAlert("phone is not correct");
      return;
    }

    const confirmationMessage = editingId
      ? "Are you sure you want to save the changes?"
      : "Do you want to add a new contact?";

    if (!window.confirm(confirmationMessage)) {
      return;
    }

    setAlert("");

    if (editingId) {
      setContacts(
        contacts.map((c) =>
          c.id === editingId ? { ...contact, id: editingId } : c
        )
      );
      window.alert("Changes have been saved successfully!");
    } else {
      const newContact = { ...contact, id: v4() };
      setContacts([...contacts, newContact]); // اصلاح این خط
      window.alert("New contact added successfully!");
    }

    setContact({ name: "", lastName: "", email: "", phone: "" });
    setEditingId(null);
    setChart(null);
  };

  const searchHandler = (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(term.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(term.toLowerCase()) ||
          contact.email.toLowerCase().includes(term.toLowerCase()) ||
          contact.phone.includes(term.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };
  return (
    <>
      <Header
        setChart={setChart}
        searchHandler={searchHandler}
        searchTerm={searchTerm}
        isBulkDeleting={isBulkDeleting}
        setIsBulkDeleting={setIsBulkDeleting}
      />

      {!!chart && (
        <Contacts
          chart={chart}
          setChart={setChart}
          contacts={contacts}
          setContacts={setContacts}
          contact={contact}
          setContact={setContact}
          onSave={saveContact}
          isEditing={!!editingId}
          alert={alert}
        />
      )}

      <ContactList
        contacts={searchTerm ? filteredContacts : contacts}
        deleteHandler={deleteHandler}
        startEditing={startEditing}
        isBulkDeleting={isBulkDeleting}
        setContacts={setContacts}
        setIsBulkDeleting={setIsBulkDeleting}
      />
    </>
  );
}

export default App;
