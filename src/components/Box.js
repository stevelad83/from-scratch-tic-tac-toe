import React from 'react';
import '../App.css';
import { useGameContext } from '../context/GameContext.js';

export default function Box({ space, value }) {
  const { handleClick } = useGameContext();
  return (
    <div className="box" onClick={() => handleClick(space)}>
      {value}
    </div>
  );
}
