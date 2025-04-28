import styles from "./header.module.css";

function Header({
  setChart,
  searchHandler,
  searchTerm,
  isBulkDeleting,
  setIsBulkDeleting,
}) {
  const showHandler = () => {
    setChart(true);
  };

  const toggleBulkDelete = () => {
    setIsBulkDeleting((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Contacts</h1>
      </div>
      <div className={styles.research}>
        <div className={styles.buttons}>
          <button className={styles.addButton} onClick={showHandler}>
            +
          </button>

          <button
            className={styles.bulkDeleteButton}
            onClick={toggleBulkDelete}
          >
            {isBulkDeleting ? "Cancel Bulk Delete" : "Manage Bulk Delete"}
          </button>
        </div>

        <input
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
          value={searchTerm}
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}

export default Header;
