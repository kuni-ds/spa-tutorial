// src/Hello.tsx
import React from "react";
import { useUser } from "../provider/UserProvider";

export default function Hello() {
  const { name } = useUser();

  return (
    <div>
      Hello, {name}
      {name && "."}
    </div>
  );
}

// 補足: 以下と同等
// return createElement("div", { children: `Hello, ${props.name}.` });

// 関数定義時に次のように書くと、
// > Hello({ name }: { name: string })
// 関数内でprops.name ではなく、nameで参照できて便利です。
