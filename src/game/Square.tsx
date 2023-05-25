import React, { useContext } from "react";
import { SquareContext } from "./contexts/SquaresContext";
import { TurnContext } from "./contexts/TurnContext";
import { VictoryColorContext } from "./contexts/VictoryColorContext";

export default function Square(props) {
  let i = props.index_h;
  let j = props.index_w;
  const { squares, setSquares } = useContext(SquareContext);
  const { turn, setTurn } = useContext(TurnContext);
  const { victoryColor, setVictoryColor } = useContext(VictoryColorContext);

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (squares[i][j] !== "無" || victoryColor !== "") return;
    let nextSquares = structuredClone(squares);
    if (turn) {
      nextSquares[i][j] = "赤";
    } else {
      nextSquares[i][j] = "青";
    }
    setSquares(nextSquares);
    setTurn(!turn);
  };

  return (
    <button className="square" onClick={handleClick}>
      {squares[i][j]}
    </button>
  );
}
