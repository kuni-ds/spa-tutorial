import React, { useState, useEffect } from "react";

import Square from "./Square";

export default function Board(props) {
  /*
    記述する。
    主に Square の状態を管理する。
  */

  const list = [];
  for (let i = 0; i < 3; i++) {
    list.push(<div className="board-row"></div>);
    for (let j = 0; j < 3; j++) {
      list.push(<Square index_w={i} index_h={j} />);
    }
  }

  return <>{list}</>;
}
