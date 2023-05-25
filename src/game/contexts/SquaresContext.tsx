import { createContext } from "react";

type Context = {squares: string[][]; setSquares: (arg: string[][]) => void};
const init: Context = {
  squares: Array.from(new Array(3), () => new Array(3).fill('')),
  setSquares: (arg) => {},
};

export const SquareContext = createContext(init);