// src/pages/Counter
import React from "react";
import CounterComponent from "../components/Counter";

export default function Counter() {
  return (
    <div>
      <h1>カウンター</h1>
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
    </div>
  );
}