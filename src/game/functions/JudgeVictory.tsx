export default function judgeVictory(squares: string[][], turn: boolean): string {
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