// src/App.tsx
import React from "react";
import Hello from "../components/Hello";
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <>
      <Hello name="world" />
      <Link to="/counter">カウンターページへ</Link>
    </>
  );

  // 補足: 以下と同等
  // return Hello({ name: "world" });

  // 補足: 以下と同等
  // const params = {
  //   name: "world",
  // };
  // return <Hello {...params} />;
}
