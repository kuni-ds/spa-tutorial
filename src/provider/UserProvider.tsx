import React, { useContext, useState } from "react";
import { createContext } from "react";

type Context = { name?: number; changeName: (v: string) => void };
const init: Context = {
  name: undefined,
  changeName: (_v) => {},
};

const UserContext = createContext<Context>(init);
export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [name, setName] = useState(undefined);

  return (
    <UserContext.Provider value={{ name, changeName: setName }}>
      {children}
    </UserContext.Provider>
  );
}
