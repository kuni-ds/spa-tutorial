// src/App.tsx
import React from "react";
import Hello from "../components/Hello";
import { Link } from "react-router-dom";
import { useUser } from "../provider/UserProvider";

export default function Top() {
  const { name, changeName } = useUser();
  return (
    <>
      <Hello />
      <input value={name || ""} onChange={(e) => changeName(e.target.value)} />
      <br/>
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
