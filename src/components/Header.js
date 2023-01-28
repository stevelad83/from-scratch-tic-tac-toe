import React from 'react';
import { useGameContext } from '../context/GameContext.js';

export default function Header() {
  const { gameMessage } = useGameContext();

  return (
    <header>
      <h1>Tic, Tac & Crosses</h1>
      <p>{gameMessage}</p>
    </header>
  );
}
