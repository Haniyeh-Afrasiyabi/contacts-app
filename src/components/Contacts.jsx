import { useState } from "react";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";
import ContactList from "./ContactList";

function Contacts({ chart, setChart, contacts, setContacts }) {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [alert, setAlert] = useState(false);

  //   const [contacts, setContacts] = useState([]);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.email
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setChart(null);
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

        <button onClick={addHandler}>Add new contact</button>
        {alert && <p>{alert}</p>}
      </div>
    </div>
  );
}

export default Contacts;
