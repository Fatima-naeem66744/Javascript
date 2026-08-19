import { useState } from "react";
import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Interactive Counter(First task)</h1>

      <CounterControls setCount={setCount} />

      <CounterDisplay count={count} />
    </div>
  );
}

export default App;