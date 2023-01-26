import React from 'react';
import Box from './Box.js';
import boardData from '../board-data.js';

export default function Board() {
  return (
    <div className="board">
      {boardData.map((box) => (
        <Box key={box.space} />
      ))}
    </div>
  );
}
