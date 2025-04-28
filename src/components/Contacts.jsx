import inputs from "../constants/inputs";

import styles from "./Contacts.module.css";

function Contacts({ setChart, contact, setContact, onSave, isEditing, alert }) {
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <span
        className={styles.cross}
        onClick={() => {
          setChart(null);
        }}
      >
        x
      </span>
      <div className={styles.chart}>
        <h2>{isEditing ? "Edit Contact" : "New Contact"}</h2>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            value={contact[input.name]}
            placeholder={input.placeholder}
            onChange={changeHandler}
          />
        ))}

        <button onClick={onSave}>
          {isEditing ? "Save Changes" : "Add Contact"}
        </button>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      </div>
    </div>
  );
}

export default Contacts;
