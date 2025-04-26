import styles from "./contactItem.module.css";

function ContactItem({ contact, deleteHandler }) {
  const { id, name, lastName, email, phone } = contact;

  console.log("deleteHandler in ContactItem:", typeof deleteHandler);
  console.log("Contact ID:", id);

  return (
    <li className={styles.item}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📫</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
