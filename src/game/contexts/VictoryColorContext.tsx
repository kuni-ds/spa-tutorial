import { createContext } from "react";

type Context = {victoryColor: string; setVictoryColor: (arg: string) => void};
const init: Context = {
  victoryColor: '',
  setVictoryColor: (arg) => {},
};

export const VictoryColorContext = createContext(init);