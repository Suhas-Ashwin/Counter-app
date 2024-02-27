import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1> Counter App </h1>
      <p> Count: {count} </p>
      <button onClick={() => setCount((prev) => prev + 1)}> Increment </button>
      <button onClick={() => setCount((prev) => prev - 1)}> Decrement </button>
    </div>
  );
}
