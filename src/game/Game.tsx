import React, { useState, useEffect } from "react";

import Board from "./Board";
import MoveButton from "./MoveButton";

import { SquareContext } from "./contexts/SquaresContext";
import { TurnContext } from "./contexts/TurnContext";
import { VictoryColorContext } from "./contexts/VictoryColorContext";

export default function Game(props) {
  /*
    記述する。
    ゲーム全般の状態管理とロジックを集中させる。
  */
  const [squares, setSquares] = useState(
    Array.from(new Array(3), () => new Array(3).fill("無"))
  );

  const [turn, setTurn] = useState(true);
  const [victoryColor, setVictoryColor] = useState("");

  let status = turn ? "赤" : "青";

  const judgeVictory = (): string => {
    const color = turn ? "青" : "赤";
    //よこ
    for (let i = 0; i < 3; i++) {
      let victory = true;
      for (let j = 0; j < 3; j++) {
        if (squares[i][j] !== color) {
          victory = false;
        }
      }
      if (victory) return color;
    }

    //たて
    for (let i = 0; i < 3; i++) {
      let victory = true;
      for (let j = 0; j < 3; j++) {
        if (squares[j][i] !== color) {
          victory = false;
        }
      }
      if (victory) return color;
    }

    //斜め
    let victory = true;
    for (let i = 0; i < 3; i++) {
      if (squares[i][i] !== color) {
        victory = false;
      }
    }
    if (victory) return color;
    victory = true;
    for (let i = 0; i < 3; i++) {
      if (squares[2 - i][i] !== color) {
        victory = false;
      }
    }
    if (victory) return color;

    return "";
  };

  useEffect(()=> {
    const judgeResult = judgeVictory();
    if (judgeResult !== "") {
      setVictoryColor(judgeResult);
    }
  }, [squares]);


  const handleNewGame = (event: React.MouseEvent<HTMLInputElement>) => {
    setSquares(Array.from(new Array(3), () => new Array(3).fill("無")));
    setTurn(true);
    setVictoryColor("");
  };

  return (
    <VictoryColorContext.Provider value={{ victoryColor, setVictoryColor }}>
      <TurnContext.Provider value={{ turn, setTurn }}>
        <SquareContext.Provider value={{ squares, setSquares }}>
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <button onClick={handleNewGame}>New Game</button>
              <div>(status)</div>
              {!victoryColor && <div>{status}のターン</div>}
              {victoryColor && <div>{victoryColor}の勝ち</div>}
              <ol>{/* <MoveButton /> */}</ol>
            </div>
          </div>
        </SquareContext.Provider>
      </TurnContext.Provider>
    </VictoryColorContext.Provider>
  );
}
