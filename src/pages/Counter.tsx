import React, { useState } from "react";
import CounterComponent from "../components/Counter";
import { CounterContext } from "../contexts/CounterContext";
import Hello from "../components/Hello";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>カウンター</h1>
      <Hello />
      <CounterContext.Provider value={{ count, increment }}>
        <CounterComponent />
        <CounterComponent />
      </CounterContext.Provider>
    </div>
  );
}
