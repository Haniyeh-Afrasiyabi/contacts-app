import { useState } from "react";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  const [chart, setChart] = useState(null);
  return (
    <>
      <Header setChart={setChart} />

      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </>
  );
}

export default App;
