import React from 'react';
import Box from './Box.js';
import { useGameContext } from '../context/GameContext.js';

export default function Board() {
  const { board } = useGameContext();
  return (
    <div className="board">
      {board.map((box) => (
        <Box key={box.space} value={box.content} space={box.space} />
      ))}
    </div>
  );
}
