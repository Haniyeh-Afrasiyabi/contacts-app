import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contacts, setContacts, deleteHandler }) {
  console.log("deleteHandler in ContactList:", typeof deleteHandler);
  return (
    <div className={styles.container}>
      <h1>Contact List</h1>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              setContacts={setContacts}
              deleteHandler={deleteHandler}
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
