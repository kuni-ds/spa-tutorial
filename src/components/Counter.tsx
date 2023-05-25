import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export default function Counter() {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
