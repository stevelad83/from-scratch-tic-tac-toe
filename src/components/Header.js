import React from 'react';
import boardData from '../board-data.js';
import { useGameContext } from '../context/GameContext.js';

export default function Header() {
  const { setBoard, setCurrentPlayer, setActive, gameMessage, setGameMessage } = useGameContext();

  function resetGame() {
    setActive(true);
    setBoard([
      { space: 0, content: '' },
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
    ]);
    setCurrentPlayer('X');
    setGameMessage('');
  }

  return (
    <header>
      <h1>Tic, Tac & Crosses</h1>
      <p>{gameMessage}</p>
      <button onClick={resetGame}>Reset</button>
    </header>
  );
}
