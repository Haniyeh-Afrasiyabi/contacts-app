import { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

function App() {
  const [chart, setChart] = useState(null);
  return (
    <>
      <Header setChart={setChart} />

      {!!chart && <Contacts chart={chart} setChart={setChart} />}
    </>
  );
}

export default App;
