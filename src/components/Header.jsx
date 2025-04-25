import styles from "./header.module.css";

function Header({setChart}) {

  const showHandler = ()=>{
    setChart(true)
  }


  return (
    <div className={styles.container}>
      <div>
        <h1>Contacts</h1>
      </div>
      <div className={styles.research}>
        <button onClick={showHandler}>+</button>
        <input type="text" />
      </div>
    </div>
  );
}

export default Header;
