import React, { useState, useEffect } from "react";

import Board from "./Board";
import MoveButton from "./MoveButton";

import { SquareContext } from "./contexts/SquaresContext";
import { TurnContext } from "./contexts/TurnContext";
import { VictoryColorContext } from "./contexts/VictoryColorContext";

import judgeVictory from "./functions/JudgeVictory";

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

  useEffect(()=> {
    const judgeResult = judgeVictory(squares, turn);
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
