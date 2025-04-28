import { useState } from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

function ContactList({
  contacts,
  setContacts,
  deleteHandler,
  startEditing,
  isBulkDeleting,
  setIsBulkDeleting,
}) {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const deleteSelectedContacts = () => {
    if (selectedContacts.length === 0) {
      alert("No contacts selected.");
      return;
    }
  
    const contactWord = selectedContacts.length === 1 ? "contact" : "contacts"; // اینجا تک یا جمع بودن رو هندل می‌کنیم
  
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedContacts.length} selected ${contactWord}?`
      )
    ) {
      const newContacts = contacts.filter(
        (contact) => !selectedContacts.includes(contact.id)
      );
      setContacts(newContacts);
      setSelectedContacts([]);
      window.alert(
        `${selectedContacts.length} ${contactWord} deleted successfully.`
      );
  
      setIsBulkDeleting(false);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact List</h1>

      {isBulkDeleting && contacts.length > 0 && (
        <button
          onClick={deleteSelectedContacts}
          className={styles.deleteAllBtn}
        >
          {selectedContacts.length === 1
            ? "Delete Selected Contact"
            : "Delete Selected Contacts"}
        </button>
      )}

      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              setContacts={setContacts}
              deleteHandler={deleteHandler}
              startEditing={startEditing}
              selectedContacts={selectedContacts}
              setSelectedContacts={setSelectedContacts}
              isBulkDeleting={isBulkDeleting}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
