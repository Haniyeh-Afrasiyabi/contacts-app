import { useState } from "react";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts({ chart, setChart }) {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [alert, setAlert] = useState(false);

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
