import styles from "./contactItem.module.css";

function ContactItem({ data: { name, lastName, email, phone } }) {
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
