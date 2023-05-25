import { createContext } from "react";

type Context = {turn: boolean; setTurn: (arg: boolean) => void};
const init: Context = {
  turn: true,
  setTurn: (arg) => {},
};

export const TurnContext = createContext(init);