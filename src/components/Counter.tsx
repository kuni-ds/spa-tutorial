// src/pages/Counter
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => setCount(count + 1);
  
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={handleOnClick}>Click me</button>
    </div>
  );
}
