import styles from "./Chart.module.css";

function Chart({ chart, setChart }) {
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
    </div>
  );
}

export default Chart;
