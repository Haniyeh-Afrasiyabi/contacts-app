import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <div className={styles.container}>
      <h1>Contact List</h1>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
