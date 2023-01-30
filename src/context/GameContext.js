import { useEffect } from 'react';
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
      yourTurnMessage();
      checkWinner(board);
      setBoard(board);
    }
  };

  const boardContent = [];
  for (let box of board) {
    boardContent.push(box.content);
  }

  const checkGameStatus = (board) => {
    if (!active) return;
    const winner = checkWinner(board);
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    } else if (!boardContent.some((i) => i === '')) {
      setGameMessage('Cats game');
    }
  };

  const yourTurnMessage = () => {
    if (currentPlayer === 'O') {
      setGameMessage("It's your turn, player X");
    } else if (currentPlayer === 'X') {
      setGameMessage("It's your turn,player 0");
    }
  };

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
        checkGameStatus,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  useEffect(() => {
    context.checkGameStatus(context.board);
  }, [context]);
  return context;
};

const checkMatch = (a, b, c) => {
  if (!a || !b || !c) return false;
  if (a === b && b === c) return true;
};

const checkWinner = (board) => {
  if (checkMatch(board[0].content, board[1].content, board[2].content)) return board[0].content;
  if (checkMatch(board[3].content, board[4].content, board[5].content)) return board[3].content;
  if (checkMatch(board[6].content, board[7].content, board[8].content)) return board[6].content;
  if (checkMatch(board[0].content, board[3].content, board[6].content)) return board[0].content;
  if (checkMatch(board[1].content, board[4].content, board[7].content)) return board[1].content;
  if (checkMatch(board[2].content, board[5].content, board[8].content)) return board[2].content;
  if (checkMatch(board[0].content, board[4].content, board[8].content)) return board[0].content;
  if (checkMatch(board[2].content, board[4].content, board[6].content)) return board[2].content;
};

export { GameProvider, useGameContext };
