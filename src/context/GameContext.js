import { createContext, useContext, useState } from 'react';
import boardData from '../board-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState('');
  const [active, setActive] = useState(true);

  const handleClick = (space) => {
    if (!active) return;
    if (!board[space].content) {
      board[space] = { space: space, content: currentPlayer };
      //switch current player
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      checkWinner(board);
    }
  };

  //call checkGameStatus
  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        gameMessage,
        setGameMessage,
        active,
        setActive,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

const checkWinner = (board) => {
  if (board[0].content === board[1].content && board[1].content === board[2].content) {
    console.log('winner');
  }
};

export { GameProvider, useGameContext };
