import styles from "./ContactItem.module.css";

function ContactItem({
  contact,
  deleteHandler,
  startEditing,
  selectedContacts,
  setSelectedContacts,
  isBulkDeleting,
}) {
  const { id, name, lastName, email, phone } = contact;

  const toggleSelect = () => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(
        selectedContacts.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.checkbox}>
        {isBulkDeleting && (
          <input
            type="checkbox"
            checked={selectedContacts.includes(id)}
            onChange={toggleSelect}
          />
        )}
      </div>

      <p>
        {name} {lastName}
      </p>
      <p className={styles.email}>
        <span>📫</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      {!isBulkDeleting && (
        <>
          <button onClick={() => startEditing(contact)}>✏️</button>
          <button onClick={() => deleteHandler(id)}>🗑</button>
        </>
      )}
    </li>
  );
}

export default ContactItem;
