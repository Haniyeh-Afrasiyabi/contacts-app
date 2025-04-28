import styles from "./header.module.css";

function Header({ setChart, searchHandler }) {
  const showHandler = () => {
    setChart(true);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Contacts</h1>
      </div>
      <div className={styles.research}>
        <button className={styles.cross} onClick={showHandler}>
          +
        </button>
        <input type="text" onChange={searchHandler} />
      </div>
    </div>
  );
}

export default Header;
